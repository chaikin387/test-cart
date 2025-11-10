import { randomUUID } from 'crypto'
import { NextRequest, NextResponse } from 'next/server'

const NAME = 'guestId'
const DAYS = 14
const OPTIONS = {
	httpOnly: true,
	sameSite: 'lax' as const,
	secure: process.env.NODE_ENV === 'production',
	path: '/',
	maxAge: DAYS * 24 * 60 * 60,
}

export const readGuestId = (req: NextRequest) => req.cookies.get(NAME)?.value ?? null

export const ensureGuestId = (req: NextRequest, res: NextResponse) => {
	const id = readGuestId(req)
	if (id) return id
	const guestId = randomUUID()
	res.cookies.set(NAME, guestId, OPTIONS)
	return guestId
}

export const deleteGuestId = (res: NextResponse) => res.cookies.set(NAME, '', { ...OPTIONS, maxAge: 0 })
