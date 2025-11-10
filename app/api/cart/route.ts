import { NextRequest, NextResponse } from 'next/server'

import { cartService } from '@/services/cart/cart-service'
import { deleteGuestId, readGuestId } from '@/services/cart/cookie'

export async function GET(req: NextRequest) {
	const guestId = readGuestId(req)
	if (!guestId) return NextResponse.json({ items: [] })

	const cart = await cartService.get(guestId)
	if (!cart?.items.length) {
		const res = new NextResponse()
		deleteGuestId(res)
		return NextResponse.json({ items: [] }, { headers: res.headers })
	}

	return NextResponse.json(cart)
}

export async function DELETE(req: NextRequest) {
	const res = new NextResponse()
	const guestId = readGuestId(req)
	if (guestId) await cartService.clearCart(guestId)
	deleteGuestId(res)
	return NextResponse.json({ ok: true }, { headers: res.headers })
}
