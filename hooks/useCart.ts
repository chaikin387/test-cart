// hooks/useCart.ts
'use client'

import api from '@/services/cart/axios'
import { Cart } from '@/types/cart-selects'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export function useCart() {
	const queryClient = useQueryClient()

	const { data: cart } = useQuery<Cart | null>({
		queryKey: ['cart'],
		queryFn: async () => (await api.get('/cart')).data,
	})

	const invalidate = () => queryClient.invalidateQueries({ queryKey: ['cart'] })

	const addItem = useMutation({
		mutationFn: async ({ variantId, quantity = 1 }: { variantId: number; quantity?: number }) =>
			(await api.post(`/cart/${variantId}`, { quantity })).data,
		onSuccess: invalidate,
	})

	const updateItem = useMutation({
		mutationFn: async ({ variantId, quantity }: { variantId: number; quantity: number }) =>
			(await api.patch(`/cart/${variantId}`, { quantity })).data,
		onSuccess: invalidate,
	})

	const removeItem = useMutation({
		mutationFn: async (variantId: number) => (await api.delete(`/cart/${variantId}`)).data,
		onSuccess: invalidate,
	})

	const clearCart = useMutation({
		mutationFn: async () => (await api.delete('/cart', { data: { clear: true } })).data,
		onSuccess: invalidate,
	})

	return { cart, addItem, updateItem, removeItem, clearCart }
}
