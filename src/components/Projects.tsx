import * as m from 'motion/react-m'

import { Card } from './Card'

const PROJECTS = [
	{
		title: 'Weather App',
		description: 'A weather application with real-time data and forecasts',
		image: '/portfolio/weather.png',
		link: 'https://t.me/WeatherApps_bot',
		technologies: ['React', 'TypeScript', 'Axios', 'REST API', 'Zustand'],
		github: 'https://github.com/cane4ka/weather-app'
	},
	{
		title: 'Briefeditor',
		description: 'An application for editing a letter.',
		image: '/portfolio/brief.webp',
		link: 'https://cane4ka.github.io/briefeditor/',
		technologies: ['React', 'TypeScript', 'Tailwind CSS'],
		github: 'https://github.com/CANE4KA/briefeditor'
	},
	{
		title: 'Avatar Editor App',
		description: 'Application for editing avatar',
		image: '/portfolio/avatar-editor.png',
		link: 'https://cane4ka.github.io/avatar-editor-app/',
		technologies: ['React', 'HTML5 Canvas'],
		github: 'https://github.com/CANE4KA/avatar-editor-app'
	},
	{
		title: 'News App',
		description: 'An application in which you can view news',
		image: '/portfolio/news.png',
		link: 'https://cane4ka.github.io/news-app/',
		technologies: ['React', 'Axios', 'REST API'],
		github: 'https://github.com/CANE4KA/news-app'
	}
]

const Projects = () => {
	return (
		<section id='projects' className='py-20 container mx-auto px-4'>
			<m.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className='text-center mb-16'
			>
				<h2 className='text-3xl font-bold mb-4'>My Projects</h2>
				<p className='text-lg max-w-2xl mx-auto'>
					Here are some of my recent works. Each project was built to solve
					specific problems.
				</p>
			</m.div>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{PROJECTS.map((project, index) => (
					<Card key={project.title} project={project} index={index} />
				))}
			</div>
		</section>
	)
}

export default Projects
