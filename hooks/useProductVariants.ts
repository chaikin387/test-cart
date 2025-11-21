'use client'

import { useEffect, useMemo, useRef } from 'react'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { ProductPage } from '@/types/selects'

export const useProductVariants = (product: ProductPage) => {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const isInit = useRef(false)

	/** Дефолтный вариант */
	const defaultVariant = useMemo(
		() => product.variants.find((v) => v.isDefault) ?? product.variants[0],
		[product.variants],
	)

	/** Универсальный поиск варианта */
	const findVariant = (sel: Record<string, string>) =>
		product.variants.find((v) =>
			v.attributeValues.every((av) => sel[av.attributeValue.attribute.slug] === av.attributeValue.slug),
		) ?? defaultVariant

	/** Текущее состояние выбора */
	const selected = useMemo(() => {
		const getOrDefault = (av: (typeof defaultVariant.attributeValues)[number]) =>
			searchParams.get(av.attributeValue.attribute.slug) ?? av.attributeValue.slug

		return Object.fromEntries(
			defaultVariant.attributeValues.map((av) => [av.attributeValue.attribute.slug, getOrDefault(av)]),
		)
	}, [searchParams, defaultVariant])

	const currentVariant = useMemo(() => findVariant(selected), [selected])

	/** Все доступные значения атрибутов */
	const availableValues = useMemo(() => {
		return product.variants
			.flatMap((v) => v.attributeValues)
			.reduce((map, av) => {
				const key = av.attributeValue.attribute.slug
				const value = av.attributeValue.slug
				return map.set(key, (map.get(key) ?? new Set()).add(value))
			}, new Map<string, Set<string>>())
	}, [product.variants])

	/** Инициализация URL */
	useEffect(() => {
		if (isInit.current) return

		const hasAllParams = product.category.attributes.some((a) => searchParams.has(a.slug))

		if (!hasAllParams) {
			const params = new URLSearchParams(Object.entries(selected).concat([['price', String(currentVariant.price)]]))

			router.replace(`${pathname}?${params}`, { scroll: false })
		}

		isInit.current = true
	}, [product.category.attributes, selected, currentVariant.price])

	/** Выбор значения */
	const handleSelect = (attr: string, value: string) => {
		const params = new URLSearchParams(searchParams)
		params.set(attr, value)

		const nextVariant = findVariant({ ...selected, [attr]: value })

		params.set('price', String(nextVariant.price))
		router.replace(`${pathname}?${params}`, { scroll: false })
	}

	/** Доступность значения */
	const isAvailable = (attr: string, value: string) =>
		product.variants.some((v) =>
			v.attributeValues.every((av) => {
				const key = av.attributeValue.attribute.slug
				const slug = av.attributeValue.slug
				return key === attr ? slug === value : selected[key] === slug
			}),
		)

	return {
		selected,
		currentVariant,
		availableValues,
		isAvailable,
		handleSelect,
	}
}

