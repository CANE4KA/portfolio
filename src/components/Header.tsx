import { Menu, Moon, Sun, X } from 'lucide-react'
import * as m from 'motion/react-m'
import { useState } from 'react'

import { useTheme } from '../providers/ThemeProvider'

const navItems = [
	{ name: 'Home', href: '#home' },
	{ name: 'About', href: '#about' },
	{ name: 'Skills', href: '#skills' },
	{ name: 'Projects', href: '#projects' },
	{ name: 'Contact', href: '#contact' }
]

const Header = () => {
	const { theme, toggleTheme } = useTheme()
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	return (
		<m.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
			className='fixed w-full bg-background/80 backdrop-blur-md z-50 border-b border-border'
		>
			<div className='container mx-auto px-4 py-4 flex justify-between items-center'>
				<a href='#home' className='text-xl font-bold'>
					Portfolio
				</a>

				<nav className='hidden md:flex items-center gap-8'>
					{navItems.map(item => (
						<a key={item.name} href={item.href} className='relative group'>
							{item.name}
							<span className='absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full'></span>
						</a>
					))}

					<button
						aria-label='Переключить тему'
						onClick={toggleTheme}
						className='p-2 rounded-full hover:bg-accent'
					>
						{theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
					</button>
				</nav>

				<button
					aria-label='Меню'
					className='md:hidden p-2'
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
				>
					{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			{mobileMenuOpen && (
				<m.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					className='md:hidden px-4 pb-4 flex flex-col gap-4'
				>
					{navItems.map(item => (
						<a
							key={item.name}
							href={item.href}
							className='py-2'
							onClick={() => setMobileMenuOpen(false)}
						>
							{item.name}
						</a>
					))}
					<button
						aria-label='Переключить тему'
						onClick={toggleTheme}
						className='flex items-center gap-2 py-2'
					>
						{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
						{theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
					</button>
				</m.div>
			)}
		</m.header>
	)
}

export default Header
