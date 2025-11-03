import { CategoryWithProducts, categoryWithProductsSelect } from '@/types/selects'

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
		select: categoryWithProductsSelect,
		orderBy: { id: 'asc' },
	})
}
