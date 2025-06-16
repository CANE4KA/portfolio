import * as m from 'motion/react-m'

const About = () => {
	return (
		<section id='about' className='py-20 container mx-auto px-4'>
			<m.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true, margin: '-100px' }}
				className='flex flex-col md:flex-row gap-12 items-center'
			>
				<m.div
					initial={{ x: 100, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='flex-1 text-center'
				>
					<h2 className='text-3xl font-bold mb-6'>About Me</h2>
					<p className='text-lg mb-4'>
						I'm a passionate frontend developer with expertise in modern
						JavaScript frameworks and a strong eye for design and user
						experience.
					</p>
					<p className='text-lg mb-6'>
						With over 2 years of experience, I've worked on various projects
						ranging from small business websites to large-scale web
						applications.
					</p>
					<div className='grid grid-cols-2 gap-4'>
						{[
							{ label: 'Name', value: 'Alexander' },
							{ label: 'Email', value: 'pony.123987@yandex.ru' },
							{ label: 'Experience', value: '18 Years' },
							{ label: 'Location', value: 'Tyumen' }
						].map((item, index) => (
							<m.div
								key={item.label}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className='bg-accent/50 p-4 rounded-lg'
							>
								<h3 className='font-medium text-primary'>{item.label}</h3>
								<p className='break-words'>{item.value}</p>
							</m.div>
						))}
					</div>
				</m.div>
			</m.div>
		</section>
	)
}

export default About
