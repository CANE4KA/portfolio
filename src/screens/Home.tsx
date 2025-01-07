import { Cards } from '../components/Cards'
import { TypingText } from '../components/TypingText'

export const Home = () => {
	return (
		<div className='text-center flex flex-col gap-16'>
			<h1 className='font-semibold'>My portfolio</h1>
			<TypingText line="I'm a frontend developer." />

			<Cards />

			<h2 className='text-lg'>
				You can see other projects{' '}
				<a href='https://github.com/CANE4KA' target='_blank'>
					here
				</a>
			</h2>
		</div>
	)
}
