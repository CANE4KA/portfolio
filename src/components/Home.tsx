import * as m from 'motion/react-m'

import { TypingText } from '../components/TypingText'

const Home = () => {
	return (
		<section
			id='home'
			className='relative h-screen flex items-center justify-center overflow-hidden'
		>
			<div className='container mx-auto px-4 text-center z-10'>
				<m.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<h1 className='text-4xl md:text-6xl font-bold mb-6 select-none'>
						Hi, I'm <span className='text-primary'>Frontend Developer</span>
					</h1>
					<TypingText
						lines={[
							'I build web applications',
							'I love React & TypeScript',
							'I create user experiences'
						]}
						className='text-2xl md:text-4xl min-h-[4rem] select-none'
					/>
				</m.div>

				<m.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className='mt-12 mb-5'
				>
					<a
						href='#projects'
						className='inline-block px-8 py-3 bg-primary text-background rounded-full font-medium hover:bg-primary/90 transition-colors'
					>
						View My Work
					</a>
				</m.div>
			</div>

			<m.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1 }}
				className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
			>
				<div className='animate-bounce w-6 h-10 border-2 border-foreground rounded-full flex justify-center'>
					<m.div
						animate={{ y: [0, 10, 0] }}
						transition={{ duration: 1.5, repeat: Infinity }}
						className='w-1 h-2 bg-foreground rounded-full mt-2'
					/>
				</div>
			</m.div>
		</section>
	)
}

export default Home
