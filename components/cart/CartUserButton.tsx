'use client'

import { ShoppingCart } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { useCart } from '@/hooks/useCart'

export function CartUserButton() {
	const router = useRouter()
	const { cart, isLoading } = useCart()
	const count = cart?.items.reduce((s, i) => s + i.quantity, 0) ?? 0

	return (
		<Button
			onClick={() => router.push('/checkout')}
			className='relative'
		>
			<ShoppingCart className='h-4 w-4' />
			{!isLoading && count > 0 && (
				<span className='border-primary bg-background text-primary absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full border text-xs'>
					{count}
				</span>
			)}
		</Button>
	)
}

