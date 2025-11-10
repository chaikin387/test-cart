// app/checkout/page.tsx
import { cookies } from 'next/headers'

import { cartService } from '@/services/cart/cart-service'
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'

import CheckoutClient from './CheckoutClient'

export default async function CheckoutPage() {
	const queryClient = new QueryClient()
	const cookieStore = await cookies()
	const guestId = cookieStore.get('guestId')?.value

	if (guestId) {
		await queryClient.prefetchQuery({
			queryKey: ['cart'],
			queryFn: () => cartService.get(guestId),
		})
	}

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<CheckoutClient />
		</HydrationBoundary>
	)
}
