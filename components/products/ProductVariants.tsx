'use client'

import { ShoppingCart } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { useProductVariants } from '@/hooks/useProductVariants'
import { ProductPage } from '@/types/selects'
import { formatPrice } from '@/utils/format-price'

import { AttributeGroup } from './AttributeGroup'
import { ProductImage } from './ProductImage'
import { ProductInfo } from './ProductInfo'

interface ProductVariantsProps {
	product: ProductPage
}

export function ProductVariants({ product }: ProductVariantsProps) {
	const { selected, current, availableValues, isAvailable, handleSelect } = useProductVariants(product)

	if (!product.variants.length) return <div className='text-muted-foreground p-6 text-center'>Нет вариантов</div>

	return (
		<div className='grid gap-8 lg:grid-cols-2'>
			<ProductImage image={current.images[0]} />

			<div className='flex flex-col gap-6'>
				<h2 className='text-2xl font-bold'>{product.name}</h2>
				<p className='text-muted-foreground'>{product.description}</p>

				<ProductInfo
					attributes={product.category.attributes}
					selectedValues={selected}
				/>

				{product.category.attributes.map((attr) => (
					<AttributeGroup
						key={attr.slug}
						attr={attr}
						selected={selected[attr.slug]}
						onSelect={handleSelect}
						isAvailable={isAvailable}
						availableValues={availableValues}
					/>
				))}

				<div className='mt-auto border-t pt-6'>
					<Button className='w-full'>
						<ShoppingCart className='mr-2 size-5' />
						Добавить в корзину
						<span className='ml-2 font-bold'>{formatPrice(current.price)}</span>
					</Button>
				</div>
			</div>
		</div>
	)
}

