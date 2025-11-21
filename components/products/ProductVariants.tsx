'use client'

import { Loader2, ShoppingCart } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { useCart } from '@/hooks/useCart'
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
	const { selected, currentVariant, availableValues, isAvailable, handleSelect } = useProductVariants(product)

	const { addItem } = useCart()

	if (!product.variants.length) return <div className='text-muted-foreground p-6 text-center'>Нет вариантов</div>

	const handleAddToCart = () => {
		addItem.mutate({ variantId: currentVariant.id, quantity: 1 })
	}

	return (
		<div className='grid gap-8 lg:grid-cols-2'>
			<ProductImage image={currentVariant.images[0]} />

			<div className='flex flex-col gap-6'>
				<h2 className='text-2xl font-bold'>{product.name}</h2>

				<p className='text-muted-foreground'>{product.description}</p>

				<ProductInfo variant={currentVariant} />

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
					<Button
						className='flex w-full items-center justify-center gap-2'
						onClick={handleAddToCart}
						disabled={addItem.isPending}
					>
						<ShoppingCart className='mr-2 size-5' />

						<span>Добавить в корзину</span>

						<span className='font-bold'>{formatPrice(currentVariant.price)}</span>

						{addItem.isPending && <Loader2 className='size-5 animate-spin' />}
					</Button>
				</div>
			</div>
		</div>
	)
}

