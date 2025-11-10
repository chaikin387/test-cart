// app/checkout/CheckoutClient.tsx
'use client'

import { Trash2Icon } from 'lucide-react'
import Image from 'next/image'

import { CartProductInfo } from '@/components/cart/CartProductInfo'
import { QuantityControl } from '@/components/cart/QuantityControl'
import { Container } from '@/components/container/Container'
import { Button } from '@/components/ui/button'
import { useCart } from '@/hooks/useCart'
import { formatPrice } from '@/utils/format-price'

export default function CheckoutClient() {
	const { cart, updateItem, removeItem, clearCart } = useCart()

	if (!cart || cart.items.length === 0) {
		return (
			<Container>
				<div className='text-muted-foreground p-6 text-center'>Корзина пуста 😕</div>
			</Container>
		)
	}

	const total = cart.items.reduce((sum, i) => sum + i.variant.price * i.quantity, 0)

	return (
		<Container>
			<h1 className='mb-6 text-2xl font-bold'>Оформление заказа</h1>

			<div className='mb-4 flex justify-end'>
				<Button
					variant='link'
					onClick={() => clearCart.mutate()}
					className='text-muted-foreground hover:text-primary flex items-center gap-2 hover:no-underline'
				>
					<span>Очистить корзину</span>
					<Trash2Icon className='size-4' />
				</Button>
			</div>

			<div className='space-y-4'>
				{cart.items.map((item) => (
					<div
						key={item.id}
						className='flex items-center gap-4 rounded-lg border p-4'
					>
						<Image
							width={80}
							height={80}
							src={item.variant.images[0]?.url || '/placeholder.png'}
							alt={item.variant.name}
							className='rounded-md object-cover'
						/>

						<div className='flex-1'>
							<p className='font-semibold'>{item.variant.product.name}</p>
							<CartProductInfo variant={item.variant} />
						</div>

						<div className='flex items-center gap-6'>
							<QuantityControl
								quantity={item.quantity}
								onIncrease={() =>
									updateItem.mutate({
										variantId: item.variant.id,
										quantity: item.quantity + 1,
									})
								}
								onDecrease={() =>
									updateItem.mutate({
										variantId: item.variant.id,
										quantity: item.quantity - 1,
									})
								}
							/>
							<div className='w-20 text-right font-bold'>{formatPrice(item.variant.price * item.quantity)}</div>
							<Button
								variant='link'
								onClick={() => removeItem.mutate(item.variant.id)}
								className='text-muted-foreground hover:text-primary hover:no-underline'
							>
								<Trash2Icon className='size-4' />
							</Button>
						</div>
					</div>
				))}
			</div>

			<div className='mt-6 border-t pt-6'>
				<p className='text-lg font-semibold'>Итого: {formatPrice(total)}</p>
			</div>
		</Container>
	)
}
