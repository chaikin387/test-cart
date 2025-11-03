'use client'

import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'

export function ModalProducts() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					variant='secondary'
					className='w-full border bg-white shadow-md hover:bg-gray-50'
					size='sm'
				>
					Быстрый просмотр
				</Button>
			</DialogTrigger>

			<DialogContent className='max-w-md'>
				<DialogHeader>
					<DialogTitle className='sr-only'>Быстрый просмотр товара</DialogTitle>
					<DialogDescription className='sr-only'>Детали товара в модальном окне</DialogDescription>
				</DialogHeader>
				<div className='text-muted-foreground py-10 text-center'>Диалог открыт</div>
			</DialogContent>
		</Dialog>
	)
}
