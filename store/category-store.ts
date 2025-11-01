import { create } from 'zustand'

interface CategoryState {
	activeCategoryId: number
	setActiveCategoryId: (id: number) => void
}

export const useCategoryStore = create<CategoryState>((set) => ({
	activeCategoryId: 0,
	setActiveCategoryId: (id) => set({ activeCategoryId: id }),
}))
