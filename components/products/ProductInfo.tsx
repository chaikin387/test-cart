// components/product/ProductInfo.tsx
'use client'

import { Coffee, Pizza, Ruler } from 'lucide-react'

import { VariantFull } from '@/types/selects'

const iconMap: Record<string, React.ElementType> = {
	coffee: Coffee,
	pizza: Pizza,
	ruler: Ruler,
}

interface ProductInfoProps {
	variant: VariantFull
}

export function ProductInfo({ variant }: ProductInfoProps) {
	if (!variant.attributeValues.length) return null

	return (
		<div className='bg-accent flex flex-wrap gap-3 rounded-2xl p-4 text-sm'>
			{variant.attributeValues.map(({ attributeValue }) => {
				const Icon = iconMap[attributeValue.attribute.icon ?? attributeValue.attribute.slug]

				return (
					<div
						key={attributeValue.id}
						className='flex items-center gap-1'
					>
						{Icon && <Icon size={16} />}
						<span className='text-primary font-medium'>{attributeValue.attribute.name}:</span>
						<span>{attributeValue.value}</span>
					</div>
				)
			})}
		</div>
	)
}

