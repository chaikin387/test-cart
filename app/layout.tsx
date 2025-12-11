import { Nunito } from 'next/font/google'

import './globals.css'
import { ReactQueryProvider } from './react-query-privider'

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
			className='scroll-smooth'
		>
			<body className={`${nunito.variable}`}>
				<ReactQueryProvider>{children}</ReactQueryProvider>
			</body>
		</html>
	)
}

