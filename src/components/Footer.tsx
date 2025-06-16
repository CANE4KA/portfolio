import { Github, Mail, Send } from 'lucide-react'

const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<footer className='border-t border-border/50 bg-background/50 backdrop-blur-lg'>
			<div className='container mx-auto px-4 py-12'>
				<div className='flex flex-col items-center gap-8 text-center'>
					<div className='flex gap-6'>
						<a
							href='https://github.com/cane4ka'
							target='_blank'
							className='text-foreground/70 hover:text-primary transition-colors'
							aria-label='GitHub'
						>
							<Github className='w-6 h-6' />
						</a>
						<a
							href='mailto:pony.123987@yandex.ru'
							className='text-foreground/70 hover:text-primary transition-colors'
							aria-label='Email'
						>
							<Mail className='w-6 h-6' />
						</a>
						<a
							href='https://t.me/HUANANZHl'
							className='text-foreground/70 hover:text-primary transition-colors'
							aria-label='Telegram'
						>
							<Send className='w-6 h-6' />
						</a>
					</div>

					<nav className='flex flex-wrap justify-center gap-4 md:gap-8'>
						<a
							href='#Home'
							className='text-sm text-foreground/70 hover:text-primary transition-colors'
						>
							Home
						</a>
						<a
							href='#about'
							className='text-sm text-foreground/70 hover:text-primary transition-colors'
						>
							About
						</a>
						<a
							href='#skills'
							className='text-sm text-foreground/70 hover:text-primary transition-colors'
						>
							Skills
						</a>
						<a
							href='#projects'
							className='text-sm text-foreground/70 hover:text-primary transition-colors'
						>
							Projects
						</a>
						<a
							href='#contact'
							className='text-sm text-foreground/70 hover:text-primary transition-colors'
						>
							Contact
						</a>
					</nav>

					<div className='text-sm text-foreground/50'>
						© {currentYear} CANE4KA. All rights reserved.
					</div>

					<p className='text-xs text-foreground/40 max-w-md'>
						Built with React, TypeScript and Tailwind CSS. Designed with
						simplicity in mind.
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
