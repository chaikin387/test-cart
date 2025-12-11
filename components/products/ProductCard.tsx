'use client'

import { Loader2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { useCart } from '@/hooks/useCart'
import { ProductCardBase } from '@/types/selects'
import { formatPrice } from '@/utils/format-price'

import { Button } from '../ui/button'
import { ModalProducts } from './ModalProducts'

interface ProductCardProps {
	product: ProductCardBase
}

export function ProductCard({ product }: ProductCardProps) {
	const { addItem } = useCart()

	const variant = product.variants[0]

	if (!variant?.images[0]) return null

	const prices = product.variants.map((v) => v.price)

	const minPrice = Math.min(...prices)

	const maxPrice = Math.max(...prices)

	const hasMultipleVariants = product.variants.length > 1

	const hasPriceRange = minPrice !== maxPrice

	const productHref = `/catalog/${product.category.slug}/${product.slug}`

	const handleAddToCart = (e: React.MouseEvent) => {
		e.preventDefault()

		addItem.mutate({ variantId: variant.id, quantity: 1 })
	}

	return (
		<Link
			href={productHref}
			className='group bg-background flex flex-col items-center rounded-2xl border p-4 shadow-sm transition-all hover:shadow-md'
		>
			<div className='relative mb-3 aspect-square w-full overflow-hidden rounded-2xl'>
				<Image
					src={variant.images[0].url}
					alt={variant.images[0].alt || product.name}
					width={290}
					height={290}
					className='object-cover transition-transform group-hover:translate-y-2'
				/>

				<div className='absolute inset-x-2 bottom-2 opacity-0 transition-opacity group-hover:opacity-100'>
					<div onClick={(e) => e.preventDefault()}>
						<ModalProducts />
					</div>
				</div>
			</div>

			<h3 className='mt-2 mb-1 w-full text-center font-semibold'>{product.name}</h3>

			{product.description && (
				<p className='text-muted-foreground mb-2 line-clamp-2 w-full text-center text-sm'>{product.description}</p>
			)}

			<div className='mt-auto mb-2 w-full text-center text-lg font-bold'>
				{hasPriceRange && 'от '}

				{formatPrice(minPrice)}
			</div>

			{hasMultipleVariants ? (
				<Button className='w-full'>Выбрать</Button>
			) : (
				<Button
					className='flex w-full items-center justify-center gap-2'
					onClick={handleAddToCart}
					disabled={addItem.isPending}
				>
					<span>В корзину</span>

					<span className={addItem.isPending ? 'visible' : 'invisible'}>
						<Loader2 className='size-5 animate-spin' />
					</span>
				</Button>
			)}
		</Link>
	)
}

