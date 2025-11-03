'use client'

import { Coffee, Pizza, Ruler } from 'lucide-react'

import { AttributeWithValues } from '@/types/selects'

const iconMap: Record<string, React.ElementType> = {
	coffee: Coffee,
	pizza: Pizza,
	ruler: Ruler,
}

interface ProductInfoProps {
	attributes: AttributeWithValues[]
	selectedValues: Record<string, string>
}

export function ProductInfo({ attributes, selectedValues }: ProductInfoProps) {
	return (
		<div className='bg-accent flex flex-wrap gap-4 rounded-2xl p-4 text-sm'>
			{attributes.map((attr) => {
				const Icon = iconMap[attr.icon ?? attr.slug]
				const value = attr.values.find((v) => v.slug === selectedValues[attr.slug])?.value ?? '—'

				return (
					<div
						key={attr.slug}
						className='flex items-center gap-2'
					>
						{Icon && <Icon size={16} />}
						<span className='text-primary font-medium'>{attr.name}:</span>
						<span>{value}</span>
					</div>
				)
			})}
		</div>
	)
}
