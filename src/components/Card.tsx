import { ExternalLink, Github } from 'lucide-react'
import * as m from 'motion/react-m'

interface Project {
	title: string
	description: string
	image: string
	link: string
	technologies: string[]
	github?: string
}

interface CardProps {
	project: Project
	index: number
}

export const Card = ({ project, index }: CardProps) => {
	return (
		<m.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			whileHover={{ y: -5 }}
			className='bg-background border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow'
		>
			<div className='relative h-48 overflow-hidden'>
				<div className='w-full h-full bg-gray-800 flex items-center justify-center'>
					<img
						loading='lazy'
						src={project.image}
						alt={`${project.title} Image`}
					/>
				</div>

				<div className='absolute inset-0 bg-black/70 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-4'>
					<a
						href={project.link}
						target='_blank'
						className='p-3 bg-primary rounded-full hover:bg-primary/90 transition-colors'
						aria-label='View project'
					>
						<ExternalLink className='w-5 h-5' />
					</a>

					{project.github && (
						<a
							href={project.github}
							target='_blank'
							className='p-3 bg-primary rounded-full hover:bg-primary/90 transition-colors'
							aria-label='View code'
						>
							<Github className='w-5 h-5' />
						</a>
					)}
				</div>
			</div>

			<div className='p-6'>
				<h3 className='text-xl font-bold mb-2'>{project.title}</h3>
				<p className='text-muted-foreground mb-4'>{project.description}</p>

				<div className='flex flex-wrap gap-2 mb-4'>
					{project.technologies.map(tech => (
						<span key={tech} className='px-2 py-1 bg-accent text-xs rounded'>
							{tech}
						</span>
					))}
				</div>
			</div>
		</m.div>
	)
}
