import { ExternalLink } from 'lucide-react'

interface Props {
	imageUrl: string
	link: string
	title: string
}

export const Card = ({ imageUrl, link, title }: Props) => {
	return (
		<div className='flex flex-col'>
			<a
				href={link}
				target='_blank'
				className='group relative overflow-hidden w-72 h-48 border border-white hover:border-orange-500 hover:translate-x-[-9px] hover:translate-y-[-9px] transition'
			>
				<img src={imageUrl} className='block w-full h-full' />

				<div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] p-6 rounded-full'>
					<ExternalLink className='text-white group-hover:text-orange-500 transition' />
				</div>
			</a>

			<p>{title}</p>
		</div>
	)
}
