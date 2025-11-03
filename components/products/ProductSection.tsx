'use client'

import { useEffect, useRef } from 'react'

import { useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

import { useCategoryStore } from '@/store/category-store'
import { CategoryWithProducts } from '@/types/selects'

import { ProductCard } from './ProductCard'

interface ProductSectionProps {
	category: CategoryWithProducts
}

export function ProductSection({ category }: ProductSectionProps) {
	const sectionRef = useRef<HTMLElement>(null)
	const setActiveCategoryId = useCategoryStore((state) => state.setActiveCategoryId)
	const router = useRouter()

	const updateUrl = useDebouncedCallback((slug: string) => {
		router.replace(`/#${slug}`, { scroll: false })
	}, 200)

	useEffect(() => {
		const section = sectionRef.current
		if (!section) return

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setActiveCategoryId(category.id)
					updateUrl(category.slug)
				}
			},
			{
				rootMargin: '-50% 0px',
				threshold: 0,
			},
		)

		observer.observe(section)
		return () => observer.unobserve(section)
	}, [category.id, category.slug, setActiveCategoryId, updateUrl])

	return (
		<section
			ref={sectionRef}
			id={category.slug}
			className='mb-10 scroll-mt-24 border-b pb-10'
		>
			<h2 className='text-primary mb-6 text-2xl font-bold'>{category.name}</h2>
			<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
				{category.products.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
					/>
				))}
			</div>
		</section>
	)
}
