'use client'

import Image from 'next/image'

import { VariantImageBase } from '@/types/selects'

interface ProductImageProps {
	image: VariantImageBase
}

export function ProductImage({ image }: ProductImageProps) {
	return (
		<div className='bg-accent flex aspect-square items-center justify-center overflow-hidden rounded-2xl'>
			{image ? (
				<Image
					src={image.url}
					alt={image.alt || 'Изображение'}
					width={500}
					height={500}
					className='object-cover'
				/>
			) : (
				<p className='text-muted-foreground text-sm'>Нет изображения</p>
			)}
		</div>
	)
}
