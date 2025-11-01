'use client'

import { useMemo, useState } from 'react'

import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ProductPageData } from '@/types/product'
import { formatPrice } from '@/utils/format-price'

import { ProductInfo } from './ProductInfo'

export function ProductVariants({ product }: { product: ProductPageData }) {
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
		[selected, variants, defaultVariant],
	)

	const typeAttr = category.attributes[0]
	const image = current.images[0]

	const byType = (typeSlug: string) =>
		variants.filter((v) =>
			v.attributeValues.some(
				(av) => av.attributeValue.attribute.slug === typeAttr.slug && av.attributeValue.slug === typeSlug,
			),
		)

	const avail = (attrSlug: string, typeSlug = selected[typeAttr.slug]) => {
		const set = new Set<string>()
		byType(typeSlug).forEach((v) =>
			v.attributeValues.forEach((av) => {
				if (av.attributeValue.attribute.slug === attrSlug) set.add(av.attributeValue.slug)
			}),
		)
		return set
	}

	const handleSelect = (attrSlug: string, valueSlug: string) => {
		const isType = attrSlug === typeAttr.slug

		if (isType) {
			const next: Record<string, string> = { [attrSlug]: valueSlug }
			for (const attr of category.attributes.slice(1)) {
				const available = avail(attr.slug, valueSlug)
				const prev = selected[attr.slug]
				next[attr.slug] = available.has(prev) ? prev : ([...available][0] ?? '')
			}
			setSelected(next)
		} else if (avail(attrSlug).has(valueSlug)) {
			setSelected((p) => ({ ...p, [attrSlug]: valueSlug }))
		}
	}

	return (
		<div className='grid gap-8 lg:grid-cols-2'>
			<div className='bg-accent aspect-square overflow-hidden rounded-2xl'>
				{image ? (
					<Image
						src={image.url}
						alt={image.alt || product.name}
						width={600}
						height={600}
						className='h-full w-full object-cover'
						priority
					/>
				) : (
					<div className='text-muted-foreground flex h-full items-center justify-center text-sm'>Нет изображения</div>
				)}
			</div>

			<div className='flex flex-col gap-6'>
				<ProductInfo
					attributes={category.attributes}
					selectedValues={selected}
				/>

				{category.attributes.map((attr) => {
					const isType = attr.slug === typeAttr.slug
					const availableValues = isType
						? new Set(
								variants.flatMap((v) =>
									v.attributeValues
										.filter((av) => av.attributeValue.attribute.slug === attr.slug)
										.map((av) => av.attributeValue.slug),
								),
							)
						: avail(attr.slug)

					return (
						<div
							key={attr.slug}
							className='flex flex-wrap gap-2'
						>
							{attr.values.map((v) => {
								const selectedValue = selected[attr.slug] === v.slug
								const isAvailable = availableValues.has(v.slug)
								return (
									<Button
										key={v.slug}
										onClick={() => handleSelect(attr.slug, v.slug)}
										disabled={!isAvailable}
										className={cn(
											'ring-accent ring-1 transition-all',
											selectedValue
												? ''
												: isAvailable
													? 'bg-background text-foreground hover:bg-accent'
													: 'bg-background text-foreground/30 cursor-not-allowed',
										)}
									>
										{v.value}
									</Button>
								)
							})}
						</div>
					)
				})}

				<div className='mt-auto border-t pt-6'>
					<Button className='w-full'>
						<ShoppingCart
							size={20}
							className='mr-2'
						/>
						Добавить в корзину
						<span className='ml-2'>{formatPrice(current.price)}</span>
					</Button>
				</div>
			</div>
		</div>
	)
}
