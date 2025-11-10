import { NextRequest, NextResponse } from 'next/server'

import { cartService } from '@/services/cart/cart-service'
import { deleteGuestId, ensureGuestId } from '@/services/cart/cookie'
import type { Cart } from '@/types/cart-selects'

const handleEmptyCart = (res: NextResponse, cart: Cart | null) =>
	!cart?.items?.length
		? (deleteGuestId(res), NextResponse.json({ items: [] }, { headers: res.headers }))
		: NextResponse.json(cart, { headers: res.headers })

export async function POST(req: NextRequest, { params }: { params: Promise<{ variantId: string }> }) {
	const res = new NextResponse()
	const guestId = ensureGuestId(req, res)
	const { quantity = 1 } = await req.json().catch(() => ({}))
	const variantId = Number((await params).variantId)

	const cart = await cartService.addItem(guestId, variantId, quantity)
	return NextResponse.json(cart, { headers: res.headers })
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ variantId: string }> }) {
	const res = new NextResponse()
	const guestId = ensureGuestId(req, res)
	const { quantity } = await req.json()
	const variantId = Number((await params).variantId)

	const cart = await cartService.updateItem(guestId, variantId, quantity)
	return handleEmptyCart(res, cart)
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ variantId: string }> }) {
	const res = new NextResponse()
	const guestId = ensureGuestId(req, res)
	const variantId = Number((await params).variantId)

	const cart = await cartService.removeItem(guestId, variantId)
	return handleEmptyCart(res, cart)
}
