// services/cart/cart-service.ts
import prisma from '@/lib/prisma'
import { Cart, cartSelect } from '@/types/cart-selects'

export const cartService = {
	async get(guestId: string): Promise<Cart | null> {
		return prisma.cart.findUnique({ where: { guestId }, select: cartSelect })
	},

	async addItem(guestId: string, variantId: number, qty = 1) {
		if (qty <= 0) return this.get(guestId)

		const cart = await prisma.cart.upsert({
			where: { guestId },
			create: { guestId },
			update: {},
			select: { id: true },
		})

		await prisma.cartItem.upsert({
			where: { cartId_variantId: { cartId: cart.id, variantId } },
			create: { cartId: cart.id, variantId, quantity: qty },
			update: { quantity: { increment: qty } },
		})

		return this.get(guestId)
	},

	async updateItem(guestId: string, variantId: number, qty: number) {
		const cart = await prisma.cart.findUnique({
			where: { guestId },
			select: { id: true },
		})
		if (!cart) return null

		if (qty <= 0) {
			await prisma.cartItem.deleteMany({
				where: { cartId: cart.id, variantId },
			})
		} else {
			await prisma.cartItem.updateMany({
				where: { cartId: cart.id, variantId },
				data: { quantity: qty },
			})
		}

		return this.get(guestId)
	},

	async removeItem(guestId: string, variantId: number) {
		const cart = await prisma.cart.findUnique({
			where: { guestId },
			select: { id: true },
		})
		if (!cart) return null

		await prisma.cartItem.deleteMany({
			where: { cartId: cart.id, variantId },
		})
		return this.get(guestId)
	},

	async clearCart(guestId: string) {
		await prisma.cart.deleteMany({ where: { guestId } })
	},
}
