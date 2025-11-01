import { Prisma } from '@/generated/prisma'

// Базовые селект без зависимостей от других файлов
export const categoryBaseSelect = {
	id: true,
	name: true,
	slug: true,
} satisfies Prisma.CategorySelect

export const attributeBaseSelect = {
	id: true,
	name: true,
	slug: true,
	type: true,
	icon: true,
	isRequired: true,
	position: true,
} satisfies Prisma.AttributeSelect

export const attributeValueSelect = {
	id: true,
	value: true,
	slug: true,
	colorHex: true,
	position: true,
} satisfies Prisma.AttributeValueSelect

export const variantImageSelect = {
	url: true,
	alt: true,
	position: true,
} satisfies Prisma.VariantImageSelect

export const productVariantBaseSelect = {
	id: true,
	name: true,
	slug: true,
	price: true,
	images: {
		orderBy: { position: 'asc' as const },
		select: variantImageSelect,
	},
} satisfies Prisma.ProductVariantSelect

// Базовые типы
export type CategoryBaseData = Prisma.CategoryGetPayload<{
	select: typeof categoryBaseSelect
}>

export type AttributeBaseData = Prisma.AttributeGetPayload<{
	select: typeof attributeBaseSelect
}>

export type AttributeValueData = Prisma.AttributeValueGetPayload<{
	select: typeof attributeValueSelect
}>
