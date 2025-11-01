'use client'

import Link from 'next/link'

import { cn } from '@/lib/utils'
import { useCategoryStore } from '@/store/category-store'
import { CategoryMenuItem } from '@/types/category'

interface CategoryMenuProps {
	categories: CategoryMenuItem[]
}

export function CategoryMenu({ categories }: CategoryMenuProps) {
	const { activeCategoryId } = useCategoryStore()

	return (
		<nav className='flex items-center'>
			<ul className='bg-accent flex items-center gap-3 rounded-2xl py-2.5'>
				{categories.map(({ id, name, slug }) => (
					<li key={id}>
						<Link
							href={`/#${slug}`}
							className={cn(
								'hover:text-primary block rounded-2xl px-5 py-2 font-bold transition-colors',
								activeCategoryId === id && 'bg-secondary text-primary shadow-md',
							)}
						>
							{name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
