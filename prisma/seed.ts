import fs from 'fs'
import path from 'path'
import slugify from 'slugify'

import { AttributeType, PrismaClient } from '@/generated/prisma'

const prisma = new PrismaClient()

/** ---------- Вспомогательные ---------- **/

const loadJson = <T>(filePath: string): T => {
	const full = path.join(process.cwd(), filePath)
	if (!fs.existsSync(full)) throw new Error(`Файл не найден: ${full}`)
	return JSON.parse(fs.readFileSync(full, 'utf-8'))
}

const slug = (str: string) => slugify(str, { lower: true, strict: true })

/** ---------- Seed ---------- **/

async function main() {
	console.log('🧹 Очистка базы...')
	// Корректный порядок очистки для соблюдения foreign key constraints
	await prisma.$transaction([
		prisma.variantImage.deleteMany(),
		prisma.variantAttributeValue.deleteMany(),
		prisma.attributeValue.deleteMany(),
		prisma.attribute.deleteMany(),
		prisma.productVariant.deleteMany(),
		prisma.product.deleteMany(),
		prisma.category.deleteMany(),
	])

	/** ---------- Категории и атрибуты ---------- **/
	console.log('📦 Создание категорий и атрибутов...')

	// Новые пути к JSON-файлам категорий
	const categoriesPathPizza = 'prisma/data/categories/pizzas-category.json'
	const categoriesPathCoffee = 'prisma/data/categories/coffee-category.json'

	// Загрузка и объединение категорий
	const categories = [
		...loadJson<
			Array<{
				name: string
				attributes: {
					name: string
					type: string
					isRequired: boolean
					position: number
					icon?: string
					values: { value: string; position: number }[]
				}[]
			}>
		>(categoriesPathPizza),
		...loadJson<
			Array<{
				name: string
				attributes: {
					name: string
					type: string
					isRequired: boolean
					position: number
					icon?: string
					values: { value: string; position: number }[]
				}[]
			}>
		>(categoriesPathCoffee),
	]

	// Карты для быстрого доступа к ID по именам
	const categoriesMap = new Map<string, number>() // Map<categoryName, categoryId>
	const attributesMap = new Map<number, Map<string, number>>() // Map<categoryId, Map<attrName, attrId>>
	const valuesMap = new Map<number, Map<string, number>>() // Map<attrId, Map<valueName, valueId>>

	// Создаем категории последовательно, т.к. нам нужны их ID для карт
	for (const cat of categories) {
		const category = await prisma.category.create({
			data: { name: cat.name, slug: slug(cat.name) },
		})
		categoriesMap.set(cat.name, category.id)
		attributesMap.set(category.id, new Map())

		for (const attr of cat.attributes ?? []) {
			const attribute = await prisma.attribute.create({
				data: {
					categoryId: category.id,
					name: attr.name,
					slug: slug(attr.name),
					type: attr.type as AttributeType,
					isRequired: attr.isRequired,
					position: attr.position,
					icon: attr.icon,
				},
			})
			attributesMap.get(category.id)!.set(attr.name, attribute.id)
			valuesMap.set(attribute.id, new Map())

			for (const val of attr.values ?? []) {
				const value = await prisma.attributeValue.create({
					data: {
						attributeId: attribute.id,
						value: val.value,
						slug: slug(val.value),
						position: val.position,
					},
				})
				valuesMap.get(attribute.id)!.set(val.value, value.id)
			}
		}
	}
	console.log(`✅ Создано ${categories.length} категорий.`)

	/** ---------- Продукты и варианты (ОПТИМИЗАЦИЯ) ---------- **/
	console.log('🍕 Подготовка продуктов...')

	// Новые пути к JSON-файлам продуктов
	const productsPathPizza = 'prisma/data/products/pizzas-product.json'
	const productsPathCoffee = 'prisma/data/products/coffee-product.json'

	// Загрузка и объединение продуктов
	const products = [
		...loadJson<
			Array<{
				name: string
				description: string
				category: string
				variants: {
					name: string
					price: number
					isDefault: boolean
					attributes: { attributeName: string; value: string }[]
					images: { url: string; alt?: string; position: number }[]
				}[]
			}>
		>(productsPathPizza),
		...loadJson<
			Array<{
				name: string
				description: string
				category: string
				variants: {
					name: string
					price: number
					isDefault: boolean
					attributes: { attributeName: string; value: string }[]
					images: { url: string; alt?: string; position: number }[]
				}[]
			}>
		>(productsPathCoffee),
	]

	// 1. Подготавливаем массив "обещаний" (promises)
	const productCreationPromises = products
		.map((prod) => {
			// Ищем ID категории. Если не нашли - пропускаем продукт.
			const categoryId = categoriesMap.get(prod.category)
			if (!categoryId) {
				console.warn(`⚠️ [Пропуск] Категория "${prod.category}" не найдена для продукта "${prod.name}"`)
				return null // Пропускаем этот продукт
			}

			const attrMapForCategory = attributesMap.get(categoryId)
			if (!attrMapForCategory) {
				// Этого не должно случиться, если логика выше верна
				console.error(`[Критично] Нет карты атрибутов для categoryId: ${categoryId}`)
				return null
			}

			// Возвращаем Promise для создания продукта
			return prisma.product.create({
				data: {
					name: prod.name,
					slug: slug(prod.name),
					description: prod.description,
					categoryId,
					// Вложенное создание вариантов и их связей
					variants: {
						create: prod.variants.map((v) => {
							// Собираем связи M2M (Variant <-> AttributeValue)
							const attributeValuesToLink = v.attributes
								.map(({ attributeName, value }) => {
									// Ищем ID атрибута
									const attrId = attrMapForCategory.get(attributeName)
									if (!attrId) {
										console.warn(
											`⚠️ [Атрибут] Атрибут "${attributeName}" не найден в категории "${prod.category}". Продукт: "${prod.name}"`,
										)
										return null
									}

									// Ищем ID значения
									const valueMapForAttr = valuesMap.get(attrId)
									if (!valueMapForAttr) {
										console.error(`[Критично] Нет карты значений для attrId: ${attrId} ("${attributeName}")`)
										return null
									}

									const valId = valueMapForAttr.get(value)
									if (!valId) {
										console.warn(
											`⚠️ [Значение] Значение "${value}" не найдено для атрибута "${attributeName}". Продукт: "${prod.name}"`,
										)
										return null
									}

									// Возвращаем объект для 'create' в M2M
									return { attributeValueId: valId }
								})
								.filter((link): link is { attributeValueId: number } => !!link) // Убираем null (пропущенные атрибуты)

							// Возвращаем данные для создания варианта
							return {
								name: v.name,
								slug: slug(v.name),
								price: v.price,
								isDefault: v.isDefault,
								stock: 0, // По умолчанию
								images: { create: v.images },
								attributeValues: {
									create: attributeValuesToLink,
								},
							}
						}),
					},
				},
			})
		})
		.filter((promise): promise is ReturnType<typeof prisma.product.create> => Boolean(promise)) // Убираем пропущенные продукты (null)

	// 2. Выполняем все "обещания" параллельно в ОДНОЙ транзакции
	console.log(`🌀 Создание ${productCreationPromises.length} продуктов...`)
	await prisma.$transaction(productCreationPromises)

	console.log('🎉 Импорт завершён!')
}

/** ---------- Запуск ---------- **/
main()
	.catch((err) => {
		console.error('❌ Ошибка:', err)
		process.exit(1)
	})
	.finally(async () => {
		// Гарантированное закрытие соединения
		await prisma.$disconnect()
	})

