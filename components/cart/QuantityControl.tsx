// components/cart/QuantityControl.tsx
'use client'

import { Minus, Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface QuantityControlProps {
	quantity: number
	onDecrease: () => void
	onIncrease: () => void
}

export function QuantityControl({ quantity, onDecrease, onIncrease }: QuantityControlProps) {
	return (
		<div className='flex items-center gap-2'>
			<Button
				className='size-8'
				onClick={onDecrease}
			>
				<Minus size={16} />
			</Button>

			<span className='min-w-8 text-center font-medium'>{quantity}</span>

			<Button
				className='size-8'
				onClick={onIncrease}
			>
				<Plus size={16} />
			</Button>
		</div>
	)
}
