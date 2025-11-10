import bcrypt from 'bcrypt'
import fs from 'fs'
import path from 'path'
import slugify from 'slugify'

import { AttributeType, PrismaClient, Role } from '@/generated/prisma'

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

	await prisma.$transaction([
		prisma.variantImage.deleteMany(),
		prisma.variantAttributeValue.deleteMany(),
		prisma.attributeValue.deleteMany(),
		prisma.attribute.deleteMany(),
		prisma.productVariant.deleteMany(),
		prisma.product.deleteMany(),
		prisma.category.deleteMany(),
		prisma.user.deleteMany(), // Добавлено удаление пользователей
	])

	/** ---------- Пользователи ---------- **/
	console.log('👤 Создание пользователей...')

	const usersPath = 'prisma/data/users/users.json'
	const users = loadJson<
		Array<{
			name: string
			email: string
			password: string
			role: string
		}>
	>(usersPath)

	// Хешируем пароли и создаем пользователей параллельно
	const userCreationPromises = users.map(async (user) => {
		const hashedPassword = await bcrypt.hash(user.password, 10)
		return prisma.user.create({
			data: {
				name: user.name,
				email: user.email,
				password: hashedPassword,
				role: user.role as Role,
			},
		})
	})

	await Promise.all(userCreationPromises)
	console.log(`✅ Создано ${users.length} пользователей.`)

	/** ---------- Категории и атрибуты ---------- **/
	console.log('📦 Создание категорий и атрибутов...')

	const categoriesPathPizza = 'prisma/data/categories/pizzas-category.json'
	const categoriesPathCoffee = 'prisma/data/categories/coffee-category.json'

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

	const categoriesMap = new Map<string, number>()
	const attributesMap = new Map<number, Map<string, number>>()
	const valuesMap = new Map<number, Map<string, number>>()

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

	/** ---------- Продукты и варианты ---------- **/
	console.log('🍕 Подготовка продуктов...')

	const productsPathPizza = 'prisma/data/products/pizzas-product.json'
	const productsPathCoffee = 'prisma/data/products/coffee-product.json'

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

	const productCreationPromises = products
		.map((prod) => {
			const categoryId = categoriesMap.get(prod.category)
			if (!categoryId) {
				console.warn(`⚠️ [Пропуск] Категория "${prod.category}" не найдена для продукта "${prod.name}"`)
				return null
			}

			const attrMapForCategory = attributesMap.get(categoryId)
			if (!attrMapForCategory) {
				console.error(`[Критично] Нет карты атрибутов для categoryId: ${categoryId}`)
				return null
			}

			return prisma.product.create({
				data: {
					name: prod.name,
					slug: slug(prod.name),
					description: prod.description,
					categoryId,
					variants: {
						create: prod.variants.map((v) => {
							const attributeValuesToLink = v.attributes
								.map(({ attributeName, value }) => {
									const attrId = attrMapForCategory.get(attributeName)
									if (!attrId) {
										console.warn(
											`⚠️ [Атрибут] Атрибут "${attributeName}" не найден в категории "${prod.category}". Продукт: "${prod.name}"`,
										)
										return null
									}

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

									return { attributeValueId: valId }
								})
								.filter((link): link is { attributeValueId: number } => !!link)

							return {
								name: v.name,
								slug: slug(v.name),
								price: v.price,
								isDefault: v.isDefault,
								stock: 0,
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
		.filter((promise): promise is ReturnType<typeof prisma.product.create> => Boolean(promise))

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
		await prisma.$disconnect()
	})
