import type { Metadata } from 'next'

import { Header } from '@/components/header/Header'

export const metadata: Metadata = {
	title: 'Test-Cart',
	description: 'Путешествие в мир Next - 2',
	icons: { icon: '/icons/logo-pizza.svg' },
}

export default function HomeLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<main className='min-h-screen'>
			<Header />
			{children}
		</main>
	)
}

