// types/selects.ts
import { Prisma } from '@/generated/prisma'

// ========== BASE SELECTS (Базовые селекты) ==========

// Базовый селект для категории (минимальный набор полей)
export const categoryBaseSelect = {
	id: true,
	name: true,
	slug: true,
} satisfies Prisma.CategorySelect

export type CategoryBase = Prisma.CategoryGetPayload<{ select: typeof categoryBaseSelect }>

// Базовый селект для атрибута
export const attributeBaseSelect = {
	id: true,
	name: true,
	slug: true,
	type: true,
	icon: true,
	isRequired: true,
	position: true,
} satisfies Prisma.AttributeSelect

export type AttributeBase = Prisma.AttributeGetPayload<{ select: typeof attributeBaseSelect }>

// Базовый селект для значения атрибута
export const attributeValueBaseSelect = {
	id: true,
	value: true,
	slug: true,
	colorHex: true,
	position: true,
} satisfies Prisma.AttributeValueSelect

export type AttributeValueBase = Prisma.AttributeValueGetPayload<{ select: typeof attributeValueBaseSelect }>

// Базовый селект для изображения варианта
export const variantImageBaseSelect = {
	url: true,
	alt: true,
	position: true,
} satisfies Prisma.VariantImageSelect

export type VariantImageBase = Prisma.VariantImageGetPayload<{ select: typeof variantImageBaseSelect }>

// Базовый селект для продукта (минимальный набор полей)
export const productBaseSelect = {
	id: true,
	name: true,
	slug: true,
} satisfies Prisma.ProductSelect

export type ProductBase = Prisma.ProductGetPayload<{ select: typeof productBaseSelect }>

// ========== COMPOSITE SELECTS (Составные селекты) ==========

// Атрибут с активными значениями, упорядоченными по позиции
export const attributeWithValuesSelect = {
	...attributeBaseSelect,
	values: {
		where: { isActive: true },
		orderBy: { position: 'asc' as const },
		select: attributeValueBaseSelect,
	},
} satisfies Prisma.AttributeSelect

export type AttributeWithValues = Prisma.AttributeGetPayload<{ select: typeof attributeWithValuesSelect }>

// Базовый селект варианта продукта вместе с активными изображениями
export const variantBaseSelect = {
	id: true,
	name: true,
	slug: true,
	price: true,
	images: {
		where: { isActive: true },
		orderBy: { position: 'asc' as const },
		select: variantImageBaseSelect,
	},
} satisfies Prisma.ProductVariantSelect

export type VariantBase = Prisma.ProductVariantGetPayload<{ select: typeof variantBaseSelect }>

// Полный селект варианта продукта с запасом, дефолтностью и значениями атрибутов
export const variantFullSelect = {
	...variantBaseSelect,
	stock: true,
	isDefault: true,
	attributeValues: {
		select: {
			attributeValue: {
				select: {
					...attributeValueBaseSelect,
					attribute: { select: attributeBaseSelect },
				},
			},
		},
	},
} satisfies Prisma.ProductVariantSelect

export type VariantFull = Prisma.ProductVariantGetPayload<{ select: typeof variantFullSelect }>

// ========== PRODUCT SELECTS (Селекты для продуктов) ==========

// Селект для карточки продукта (используется компонентом ProductCard)
export const productCardBaseSelect = {
	id: true,
	name: true,
	slug: true,
	description: true,
	category: { select: categoryBaseSelect },
	variants: {
		where: { isActive: true },
		orderBy: { isDefault: 'desc' as const },
		select: variantBaseSelect,
	},
} satisfies Prisma.ProductSelect

export type ProductCardBase = Prisma.ProductGetPayload<{ select: typeof productCardBaseSelect }>

// Полный селект для страницы продукта с категорией, атрибутами и вариантами
export const productPageSelect = {
	id: true,
	name: true,
	slug: true,
	description: true,
	category: {
		select: {
			...categoryBaseSelect,
			attributes: {
				where: { isActive: true },
				orderBy: { position: 'asc' as const },
				select: attributeWithValuesSelect,
			},
		},
	},
	variants: {
		where: { isActive: true },
		orderBy: [{ isDefault: 'desc' as const }, { id: 'asc' as const }],
		select: variantFullSelect,
	},
} satisfies Prisma.ProductSelect

export type ProductPage = Prisma.ProductGetPayload<{ select: typeof productPageSelect }>

// ========== CATEGORY SELECTS (Селекты для категорий) ==========

// Категория с активными продуктами (для главной страницы или меню)
export const categoryWithProductsSelect = {
	...categoryBaseSelect,
	products: {
		where: { isActive: true },
		orderBy: { id: 'desc' as const },
		select: productCardBaseSelect, // <-- Обновлено
	},
} satisfies Prisma.CategorySelect

export type CategoryWithProducts = Prisma.CategoryGetPayload<{ select: typeof categoryWithProductsSelect }>

// Категория с атрибутами и их значениями
export const categoryWithAttributesSelect = {
	...categoryBaseSelect,
	attributes: {
		where: { isActive: true },
		orderBy: { position: 'asc' as const },
		select: attributeWithValuesSelect,
	},
} satisfies Prisma.CategorySelect

export type CategoryWithAttributes = Prisma.CategoryGetPayload<{ select: typeof categoryWithAttributesSelect }>
