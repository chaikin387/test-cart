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
import { cn } from '@/lib/utils'

export function ModalProducts() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					variant='secondary'
					className='bg-background/70 hover:bg-accent w-full border shadow-md'
				>
					Быстрый просмотр
				</Button>
			</DialogTrigger>

			<DialogContent className={cn('bg-background rounded-3xl p-3 lg:min-h-[670px] lg:max-w-6xl')}>
				<DialogHeader>
					<DialogTitle className='sr-only'>Быстрый просмотр товара</DialogTitle>
					<DialogDescription className='sr-only'>Детали товара в модальном окне</DialogDescription>
				</DialogHeader>
				<div className='text-muted-foreground py-10 text-center'>Диалог открыт</div>
			</DialogContent>
		</Dialog>
	)
}

