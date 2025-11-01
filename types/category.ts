// types/category.ts
import { Prisma } from '@/generated/prisma'

import { attributeGroupSelect } from './attribute'
import { categoryBaseSelect, productVariantBaseSelect } from './base-selects'

const localProductCardSelect = {
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

// Селект для меню категорий (аналогичен базовому)
export const categoryMenuSelect = categoryBaseSelect
export type CategoryMenuItem = Prisma.CategoryGetPayload<{
	select: typeof categoryMenuSelect
}>

// Селект для категорий с продуктами (главная страница)
export const homeCategorySelect = {
	...categoryBaseSelect,
	products: {
		where: { isActive: true },
		orderBy: { id: 'desc' as const },
		select: localProductCardSelect,
	},
} satisfies Prisma.CategorySelect

export type CategoryWithProducts = Prisma.CategoryGetPayload<{
	select: typeof homeCategorySelect
}>

// Селект для категории с атрибутами (страница продукта)
export const categoryWithAttributesSelect = {
	...categoryBaseSelect,
	attributes: {
		where: { isActive: true },
		orderBy: { position: 'asc' as const },
		select: attributeGroupSelect,
	},
} satisfies Prisma.CategorySelect

export type CategoryWithAttributes = Prisma.CategoryGetPayload<{
	select: typeof categoryWithAttributesSelect
}>
