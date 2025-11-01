import Image from 'next/image'
import Link from 'next/link'

import { ProductCardItem } from '@/types/product'
import { formatPrice } from '@/utils/format-price'

import { Button } from '../ui/button'
import { ModalProducts } from './ModalProducts'

interface ProductCardProps {
	product: ProductCardItem
}

export function ProductCard({ product }: ProductCardProps) {
	const variant = product.variants[0]
	if (!variant?.images[0]) return null

	const prices = product.variants.map((v) => v.price)
	const minPrice = Math.min(...prices)
	const maxPrice = Math.max(...prices)

	const hasMultipleVariants = product.variants.length > 1
	const hasPriceRange = minPrice !== maxPrice
	const productHref = `/catalog/${product.category.slug}/${product.slug}`

	return (
		<Link
			href={productHref}
			className='group bg-background flex flex-col items-center rounded-2xl border p-4 shadow-sm transition-shadow hover:shadow-md'
		>
			<div className='relative mb-3 aspect-square w-full overflow-hidden rounded-2xl'>
				<Image
					src={variant.images[0].url}
					alt={variant.images[0].alt || product.name}
					width={290}
					height={290}
					className='object-cover transition-transform group-hover:translate-y-2'
				/>

				<div className='pointer-events-none absolute inset-x-2 bottom-2 opacity-0 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100'>
					<div
						className='pointer-events-auto'
						onClick={(e) => e.preventDefault()}
					>
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

			<Button className='w-full'>{hasMultipleVariants ? 'Выбрать' : 'В корзину'}</Button>
		</Link>
	)
}
