import { Nunito } from 'next/font/google'

import './globals.css'

const nunito = Nunito({
	variable: '--font-nunito',
	subsets: ['latin'],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='ru'
			data-scroll-behavior='smooth'
		>
			<body className={`${nunito.variable}`}>{children}</body>
		</html>
	)
}

