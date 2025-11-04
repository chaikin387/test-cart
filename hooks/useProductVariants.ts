'use client'

import { useMemo, useState } from 'react'

import { ProductPage } from '@/types/selects'

export const useProductVariants = (product: ProductPage) => {
	const defaultVariant = product.variants.find((v) => v.isDefault) ?? product.variants[0]

	const [selected, setSelected] = useState<Record<string, string>>(() =>
		Object.fromEntries(
			defaultVariant.attributeValues.map((av) => [av.attributeValue.attribute.slug, av.attributeValue.slug]),
		),
	)

	const current = useMemo(
		() =>
			product.variants.find((v) =>
				v.attributeValues.every((av) => selected[av.attributeValue.attribute.slug] === av.attributeValue.slug),
			) ?? defaultVariant,
		[selected, product.variants],
	)

	const availableValues = useMemo(() => {
		const map = new Map<string, Set<string>>()
		for (const v of product.variants) {
			for (const av of v.attributeValues) {
				const attr = av.attributeValue.attribute.slug
				if (!map.has(attr)) map.set(attr, new Set())
				map.get(attr)!.add(av.attributeValue.slug)
			}
		}
		return map
	}, [product.variants])

	const isAvailable = (attr: string, value: string) =>
		product.variants.some((v) =>
			v.attributeValues.every((av) =>
				av.attributeValue.attribute.slug === attr
					? av.attributeValue.slug === value
					: selected[av.attributeValue.attribute.slug] === av.attributeValue.slug,
			),
		)

	const handleSelect = (attr: string, value: string) => setSelected((s) => ({ ...s, [attr]: value }))

	return {
		selected,
		current,
		availableValues,
		isAvailable,
		handleSelect,
	}
}
