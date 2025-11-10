import { cn } from '@/lib/utils'

import { CartUserButton } from '../cart/CartUserButton'
import { Container } from '../container/Container'
import { Logo } from './Logo'

interface HeaderProps {
	showCartUserButton?: boolean
}

export const Header = ({ showCartUserButton = true }: HeaderProps) => {
	return (
		<Container>
			<header className={cn('mb-10 flex items-center justify-between gap-10 border-b py-8')}>
				<Logo />
				{showCartUserButton && <CartUserButton />}
			</header>
		</Container>
	)
}

