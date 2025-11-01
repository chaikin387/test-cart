// types/product.ts
import { Prisma } from '@/generated/prisma'

import { attributeBaseSelect, attributeValueSelect, categoryBaseSelect, productVariantBaseSelect } from './base-selects'

// Селект для карточки продукта
export const productCardSelect = {
	id: true,
	name: true,
	slug: true,
	description: true,
	category: {
		select: categoryBaseSelect,
	},
	variants: {
		where: { isActive: true },
		orderBy: { isDefault: 'desc' as const },
		select: productVariantBaseSelect,
	},
} satisfies Prisma.ProductSelect

export type ProductCardItem = Prisma.ProductGetPayload<{
	select: typeof productCardSelect
}>

// Полный селект варианта продукта для страницы продукта
export const productVariantPageSelect = {
	...productVariantBaseSelect,
	stock: true,
	isDefault: true,
	attributeValues: {
		select: {
			attributeValue: {
				select: {
					...attributeValueSelect,
					attribute: {
						select: attributeBaseSelect,
					},
				},
			},
		},
	},
} satisfies Prisma.ProductVariantSelect

export type ProductVariantPageData = Prisma.ProductVariantGetPayload<{
	select: typeof productVariantPageSelect
}>

// Селект для страницы продукта
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
				select: {
					...attributeBaseSelect,
					values: {
						where: { isActive: true },
						orderBy: { position: 'asc' as const },
						select: attributeValueSelect,
					},
				},
			},
		},
	},
	variants: {
		where: { isActive: true },
		orderBy: [{ isDefault: 'desc' as const }, { id: 'asc' as const }],
		select: productVariantPageSelect,
	},
} satisfies Prisma.ProductSelect

export type ProductPageData = Prisma.ProductGetPayload<{
	select: typeof productPageSelect
}>
