import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Оформление заказа',
	description: 'Test-Cart - оформление заказа',
	icons: { icon: '/icons/logo-pizza.svg' },
}

export default function CheckoutLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <main className='bg-primary-foreground min-h-screen'>{children}</main>
}
