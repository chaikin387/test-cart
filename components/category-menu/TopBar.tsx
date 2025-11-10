'use client'

import { useEffect, useRef, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { CategoryWithProducts } from '@/types/selects'

import { Container } from '../container/Container'
import { CategoryMenu } from './CategoryMenu'

interface TopBarProps {
	categories: CategoryWithProducts[]
}

export function TopBar({ categories }: TopBarProps) {
	const sentinelRef = useRef<HTMLDivElement>(null)
	const [isSticky, setIsSticky] = useState(false)

	useEffect(() => {
		const sentinel = sentinelRef.current
		if (!sentinel) return

		const observer = new IntersectionObserver(
			([entry]) => {
				setIsSticky(!entry.isIntersecting)
			},
			{
				rootMargin: '0px',
				threshold: 0,
			},
		)

		observer.observe(sentinel)
		return () => observer.unobserve(sentinel)
	}, [])

	return (
		<>
			<div ref={sentinelRef} />
			<div className='bg-background/70 sticky top-0 z-10 mb-10 py-2 backdrop-blur-md'>
				<Container className='flex items-center justify-between'>
					<div className='flex items-center'>
						<Link
							href='/'
							className={`shrink-0 transition-all duration-500 ease-out ${
								isSticky ? 'translate-x-0 pr-3 opacity-100' : 'w-0 -translate-x-full opacity-0'
							}`}
							aria-label='На главную'
						>
							<Image
								src='/icons/logo-top-bar.svg'
								alt='Логотип'
								width={40}
								height={40}
							/>
						</Link>
						<CategoryMenu categories={categories} />
					</div>
				</Container>
			</div>
		</>
	)
}

