'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { AttributeWithValues } from '@/types/selects'

interface AttributeGroupProps {
	attr: AttributeWithValues
	selected?: string
	onSelect: (attr: string, value: string) => void
	isAvailable: (attr: string, value: string) => boolean
	availableValues: Map<string, Set<string>>
}

export function AttributeGroup({ attr, selected, onSelect, isAvailable, availableValues }: AttributeGroupProps) {
	const allowed = availableValues.get(attr.slug)
	if (!allowed?.size) return null

	return (
		<div className='flex flex-wrap gap-2'>
			{attr.values
				.filter((v) => allowed.has(v.slug))
				.map((value) => {
					const active = selected === value.slug
					const available = isAvailable(attr.slug, value.slug)

					return (
						<Button
							key={value.slug}
							onClick={() => onSelect(attr.slug, value.slug)}
							disabled={!available}
							className={cn(
								'ring-accent ring-1 transition-all',
								active
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
}
