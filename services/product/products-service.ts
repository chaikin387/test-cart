import prisma from '@/lib/prisma'
import { ProductPage, productPageSelect } from '@/types/selects'

export async function getProductWithRelations(categorySlug: string, productSlug: string): Promise<ProductPage | null> {
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

