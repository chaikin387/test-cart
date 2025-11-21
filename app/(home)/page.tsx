import { TopBar } from '@/components/category-menu/TopBar'
import { Container } from '@/components/container/Container'
import { ProductSection } from '@/components/products/ProductSection'
import { getActiveCategories } from '@/services/product/categories-service'

export default async function HomePage() {
	const categories = await getActiveCategories()

	return (
		<div className='flex flex-1 flex-col'>
			<Container>
				<TopBar categories={categories} />
				<div className='p-4'>
					{categories.map((category) => (
						<ProductSection
							key={category.id}
							category={category}
						/>
					))}
				</div>
			</Container>
		</div>
	)
}

