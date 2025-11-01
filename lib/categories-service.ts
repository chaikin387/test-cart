import { CategoryWithProducts, homeCategorySelect } from '@/types'

import prisma from './prisma'

export async function getActiveCategories(): Promise<CategoryWithProducts[]> {
	return prisma.category.findMany({
		where: {
			isActive: true,
			products: {
				some: {
					isActive: true,
					variants: { some: { isActive: true } },
				},
			},
		},
		select: homeCategorySelect,
		orderBy: { id: 'asc' },
	})
}
