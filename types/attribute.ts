import { Prisma } from '@/generated/prisma'

import { attributeBaseSelect, attributeValueSelect } from './base-selects'

// Полный селект для группы атрибутов со значениями
export const attributeGroupSelect = {
	...attributeBaseSelect,
	values: {
		where: { isActive: true },
		orderBy: { position: 'asc' as const },
		select: attributeValueSelect,
	},
} satisfies Prisma.AttributeSelect

export type AttributeGroup = Prisma.AttributeGetPayload<{
	select: typeof attributeGroupSelect
}>
