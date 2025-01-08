import { Card } from './Card'

const PROJECTS = [
	{
		title: 'Weather App',
		image: 'weather.png',
		link: 'https://t.me/WeatherApps_bot'
	},
	{
		title: 'Briefeditor App',
		image: 'brief.png',
		link: 'https://cane4ka.github.io/briefeditor'
	},
	{
		title: 'Todo App',
		image: 'todo.png',
		link: 'https://cane4ka.github.io/todo-app'
	},
	{
		title: 'News App',
		image: 'news.png',
		link: 'https://cane4ka.github.io/news-app'
	}
]

export const Cards = () => {
	return (
		<div className='flex justify-center gap-4 flex-wrap'>
			{PROJECTS.map(project => (
				<Card
					key={project.title}
					imageUrl={project.image}
					link={project.link}
					title={project.title}
				/>
			))}
		</div>
	)
}
