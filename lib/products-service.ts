import { ProductPageData, productPageSelect } from '@/types'

import prisma from './prisma'

export async function getProductWithRelations(
	categorySlug: string,
	productSlug: string,
): Promise<ProductPageData | null> {
	return prisma.product.findFirst({
		where: {
			slug: productSlug,
			isActive: true,
			category: {
				slug: categorySlug,
				isActive: true,
			},
		},
		select: productPageSelect,
	})
}
