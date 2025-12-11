// types/selects.ts
import { Prisma } from '@/generated/prisma'

// ========== BASE SELECTS (Базовые селекты) ==========

// Базовый селект для категории (минимальный набор полей)
export const categorySelect = {
	id: true,
	name: true,
	slug: true,
} satisfies Prisma.CategorySelect

export type CategoryBase = Prisma.CategoryGetPayload<{ select: typeof categorySelect }>

// Базовый селект для атрибута
export const attributeSelect = {
	id: true,
	name: true,
	slug: true,
	type: true,
	icon: true,
	isRequired: true,
	position: true,
} satisfies Prisma.AttributeSelect

export type AttributeBase = Prisma.AttributeGetPayload<{ select: typeof attributeSelect }>

// Базовый селект для значения атрибута
export const attributeValueSelect = {
	id: true,
	value: true,
	slug: true,
	colorHex: true,
	position: true,
} satisfies Prisma.AttributeValueSelect

export type AttributeValueBase = Prisma.AttributeValueGetPayload<{ select: typeof attributeValueSelect }>

// Базовый селект для изображения варианта
export const variantImageSelect = {
	id: true,
	url: true,
	alt: true,
	position: true,
} satisfies Prisma.VariantImageSelect

export type VariantImageBase = Prisma.VariantImageGetPayload<{ select: typeof variantImageSelect }>

// Базовый селект для продукта (минимальный набор полей)
export const productSelect = {
	id: true,
	name: true,
	slug: true,
} satisfies Prisma.ProductSelect

export type ProductBase = Prisma.ProductGetPayload<{ select: typeof productSelect }>

// ========== COMPOSITE SELECTS (Составные селекты) ==========

// Атрибут с активными значениями, упорядоченными по позиции
export const attributeWithValuesSelect = {
	...attributeSelect,
	values: {
		where: { isActive: true },
		orderBy: { position: 'asc' as const },
		select: attributeValueSelect,
	},
} satisfies Prisma.AttributeSelect

export type AttributeWithValues = Prisma.AttributeGetPayload<{ select: typeof attributeWithValuesSelect }>

// Базовый селект варианта продукта вместе с активными изображениями
export const variantSelect = {
	id: true,
	name: true,
	slug: true,
	price: true,
	images: {
		where: { isActive: true },
		orderBy: { position: 'asc' as const },
		select: variantImageSelect,
	},
} satisfies Prisma.ProductVariantSelect

export type VariantBase = Prisma.ProductVariantGetPayload<{ select: typeof variantSelect }>

// Полный селект варианта продукта с запасом, дефолтностью и значениями атрибутов
export const variantDetailedSelect = {
	...variantSelect,
	stock: true,
	isDefault: true,
	attributeValues: {
		select: {
			attributeValue: {
				select: {
					...attributeValueSelect,
					attribute: { select: attributeSelect },
				},
			},
		},
	},
} satisfies Prisma.ProductVariantSelect

export type VariantFull = Prisma.ProductVariantGetPayload<{ select: typeof variantDetailedSelect }>

// ========== PRODUCT SELECTS (Селекты для продуктов) ==========

// Селект для карточки продукта (используется компонентом ProductCard)
export const productCardSelect = {
	id: true,
	name: true,
	slug: true,
	description: true,
	category: { select: categorySelect },
	variants: {
		where: { isActive: true },
		orderBy: { isDefault: 'desc' as const },
		select: variantSelect,
	},
} satisfies Prisma.ProductSelect

export type ProductCardBase = Prisma.ProductGetPayload<{ select: typeof productCardSelect }>

// Полный селект для страницы продукта с категорией, атрибутами и вариантами
export const productPageSelect = {
	id: true,
	name: true,
	slug: true,
	description: true,
	category: {
		select: {
			...categorySelect,
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
		select: variantDetailedSelect,
	},
} satisfies Prisma.ProductSelect

export type ProductPage = Prisma.ProductGetPayload<{ select: typeof productPageSelect }>

// Селект для быстрого просмотра продукта
export const productQuickViewSelect = {
	id: true,
	name: true,
	slug: true,
	description: true,
	category: {
		select: {
			...categorySelect,
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
		select: variantDetailedSelect,
	},
} satisfies Prisma.ProductSelect

export type ProductQuickView = Prisma.ProductGetPayload<{ select: typeof productQuickViewSelect }>

// ========== CATEGORY SELECTS (Селекты для категорий) ==========

// Категория с активными продуктами (для главной страницы или меню)
export const categoryWithProductsSelect = {
	...categorySelect,
	products: {
		where: { isActive: true },
		orderBy: { id: 'desc' as const },
		select: productCardSelect,
	},
} satisfies Prisma.CategorySelect

export type CategoryWithProducts = Prisma.CategoryGetPayload<{ select: typeof categoryWithProductsSelect }>

// Категория с атрибутами и их значениями
export const categoryWithAttributesSelect = {
	...categorySelect,
	attributes: {
		where: { isActive: true },
		orderBy: { position: 'asc' as const },
		select: attributeWithValuesSelect,
	},
} satisfies Prisma.CategorySelect

export type CategoryWithAttributes = Prisma.CategoryGetPayload<{ select: typeof categoryWithAttributesSelect }>
