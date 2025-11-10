// types/cart-selects.ts
import { Prisma } from '@/generated/prisma'

import { productBaseSelect, variantFullSelect } from './selects'

export const cartVariantSelect = {
	...variantFullSelect,
	product: { select: productBaseSelect },
} satisfies Prisma.ProductVariantSelect

export type CartVariant = Prisma.ProductVariantGetPayload<{ select: typeof cartVariantSelect }>

export const cartItemSelect = {
	id: true,
	quantity: true,
	isSelected: true,
	variant: { select: cartVariantSelect },
} satisfies Prisma.CartItemSelect

export type CartItem = Prisma.CartItemGetPayload<{ select: typeof cartItemSelect }>

export const cartSelect = {
	id: true,
	guestId: true,
	items: {
		select: cartItemSelect,
		orderBy: { id: 'desc' as const },
	},
} satisfies Prisma.CartSelect

export type Cart = Prisma.CartGetPayload<{ select: typeof cartSelect }>
