// components/cart/CartProductInfo.tsx
'use client'

import { CartVariant } from '@/types/cart-selects'

interface CartProductInfoProps {
	variant: CartVariant
}

export function CartProductInfo({ variant }: CartProductInfoProps) {
	if (!variant.attributeValues.length) return null

	return (
		<div className='text-muted-foreground flex flex-wrap gap-3 text-sm'>
			{variant.attributeValues.map(({ attributeValue }) => (
				<div
					className='flex items-center gap-1'
					key={attributeValue.id}
				>
					<span className='text-primary font-medium'>{attributeValue.attribute.name}:</span>
					<span>{attributeValue.value}</span>
				</div>
			))}
		</div>
	)
}
