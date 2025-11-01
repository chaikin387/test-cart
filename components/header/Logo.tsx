import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
	return (
		<Link
			href='/'
			className='flex items-center gap-4'
		>
			<Image
				priority={false}
				src={'/icons/logo-pizza.svg'}
				alt={'Логотип'}
				width={40}
				height={40}
			/>
			<span>
				<h1 className='text-2xl font-black uppercase'>Test-Cart</h1>
				<p className='text-muted-foreground text-sm leading-3'>идет изучение</p>
			</span>
		</Link>
	)
}

