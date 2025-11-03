'use client'

import { useMemo, useState } from 'react'

import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ProductPage } from '@/types/selects'
import { formatPrice } from '@/utils/format-price'

import { ProductInfo } from './ProductInfo'

interface ProductVariantsProps {
	product: ProductPage
}

export function ProductVariants({ product }: ProductVariantsProps) {
	const { variants, category } = product
	if (!variants.length) return <div className='text-muted-foreground p-6 text-center'>Нет вариантов</div>

	const defaultVariant = variants.find((v) => v.isDefault) ?? variants[0]

	const [selected, setSelected] = useState<Record<string, string>>(() =>
		Object.fromEntries(
			defaultVariant.attributeValues.map((av) => [av.attributeValue.attribute.slug, av.attributeValue.slug]),
		),
	)

	const current = useMemo(
		() =>
			variants.find((v) =>
				v.attributeValues.every((av) => selected[av.attributeValue.attribute.slug] === av.attributeValue.slug),
			) ?? defaultVariant,
		[selected, variants],
	)

	const availableValues = useMemo(() => {
		const map = new Map<string, Set<string>>()
		for (const v of variants) {
			for (const av of v.attributeValues) {
				const attr = av.attributeValue.attribute.slug
				if (!map.has(attr)) map.set(attr, new Set())
				map.get(attr)!.add(av.attributeValue.slug)
			}
		}
		return map
	}, [variants])

	const isAvailable = (attr: string, value: string) =>
		variants.some((v) =>
			v.attributeValues.every((av) =>
				av.attributeValue.attribute.slug === attr
					? av.attributeValue.slug === value
					: selected[av.attributeValue.attribute.slug] === av.attributeValue.slug,
			),
		)

	const handleSelect = (attr: string, value: string) => setSelected((s) => ({ ...s, [attr]: value }))

	return (
		<div className='grid gap-8 lg:grid-cols-2'>
			<div className='bg-accent flex aspect-square items-center justify-center overflow-hidden rounded-2xl'>
				{current.images[0] ? (
					<Image
						src={current.images[0].url}
						alt={current.images[0].alt || product.name}
						width={500}
						height={500}
						className='object-cover'
						priority
					/>
				) : (
					<div className='text-muted-foreground text-sm'>Нет изображения</div>
				)}
			</div>

			<div className='flex flex-col gap-6'>
				<h2 className='text-2xl font-bold'>{product.name}</h2>
				<p className='text-muted-foreground'>{product.description}</p>
				<ProductInfo
					attributes={category.attributes}
					selectedValues={selected}
				/>

				{category.attributes.map((attr) => {
					const allowed = availableValues.get(attr.slug)
					if (!allowed?.size) return null

					return (
						<div
							key={attr.slug}
							className='flex flex-wrap gap-2'
						>
							{attr.values
								.filter((v) => allowed.has(v.slug))
								.map((value) => {
									const isSel = selected[attr.slug] === value.slug
									const available = isAvailable(attr.slug, value.slug)
									return (
										<Button
											key={value.slug}
											onClick={() => handleSelect(attr.slug, value.slug)}
											disabled={!available}
											className={cn(
												'ring-accent ring-1 transition-all',
												isSel
													? ''
													: available
														? 'bg-background text-foreground hover:bg-accent'
														: 'bg-background text-foreground/30',
											)}
										>
											{value.value}
										</Button>
									)
								})}
						</div>
					)
				})}

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
