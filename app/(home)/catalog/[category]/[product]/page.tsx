import { notFound } from 'next/navigation'

import { Container } from '@/components/container/Container'
import { ProductVariants } from '@/components/products/ProductVariants'
import { getProductWithRelations } from '@/services/product/products-service'

export const revalidate = 1800

interface ProductPageProps {
	params: Promise<{ category: string; product: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
	const { category: categorySlug, product: productSlug } = await params
	const product = await getProductWithRelations(categorySlug, productSlug)

	if (!product) return notFound()

	return (
		<Container>
			<ProductVariants product={product} />
		</Container>
	)
}
