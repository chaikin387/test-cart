import { cn } from '@/lib/utils'

import { Container } from '../container/Container'
import { Logo } from './Logo'

interface HeaderProps {
	className?: string
}

export const Header = ({ className }: HeaderProps) => {
	return (
		<Container>
			<header className={cn('mb-10 flex items-center justify-between gap-10 border-b py-8', className)}>
				<Logo />
			</header>
		</Container>
	)
}

