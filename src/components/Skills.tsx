import * as m from 'motion/react-m'

const SKILLS = [
	{ name: 'React', level: 90, color: '#61DAFB' },
	{ name: 'TypeScript', level: 85, color: '#3178C6' },
	{ name: 'JavaScript', level: 95, color: '#F7DF1E' },
	{ name: 'HTML/CSS', level: 98, color: '#E34F26' },
	{ name: 'Node.js', level: 80, color: '#339933' },
	{ name: 'Tailwind CSS', level: 90, color: '#06B6D4' }
]

const Skills = () => {
	return (
		<section id='skills' className='py-20 bg-accent/10'>
			<div className='container mx-auto px-4'>
				<m.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='text-center mb-16'
				>
					<h2 className='text-3xl font-bold mb-4'>My Skills</h2>
					<p className='text-lg max-w-2xl mx-auto'>
						Here are the technologies I work with on a regular basis
					</p>
				</m.div>

				<div className='grid grid-cols-2 md:grid-cols-3 gap-8'>
					{SKILLS.map((skill, index) => (
						<m.div
							key={skill.name}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className='flex flex-col items-center'
						>
							<div className='relative w-24 h-24 mb-4'>
								<svg className='w-full h-full' viewBox='0 0 36 36'>
									<path
										d='M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831'
										fill='none'
										stroke='#e5e7eb'
										strokeWidth='2'
									/>
									<m.path
										d='M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831'
										fill='none'
										stroke={skill.color}
										strokeWidth='2'
										strokeLinecap='round'
										initial={{ strokeDasharray: '0, 100' }}
										whileInView={{ strokeDasharray: `${skill.level}, 100` }}
										viewport={{ once: true }}
										transition={{ duration: 1.5, delay: index * 0.1 }}
									/>
								</svg>
								<span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold'>
									{skill.level}%
								</span>
							</div>
							<h3 className='font-medium'>{skill.name}</h3>
						</m.div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Skills
