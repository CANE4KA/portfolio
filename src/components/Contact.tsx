import { Mail, MapPin, Phone, Send } from 'lucide-react'
import * as m from 'motion/react-m'
import { ChangeEvent, FormEvent, useState } from 'react'

const BOT_TOKEN = 'bot7929836999:AAEJP7RsJik_bw0Q6AhLUfPZPrrAMWi71Uk'
const CHAT_ID = '-4526840969'

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	})
	const [submitted, setSubmitted] = useState(false)

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const sendToTelegram = async (data: typeof formData) => {
		const text = `Новое сообщение:\nИмя: ${data.name}\nEmail: ${data.email}\nСообщение: ${data.message}`

		try {
			await fetch(`https://api.telegram.org/${BOT_TOKEN}/sendMessage`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ chat_id: CHAT_ID, text })
			})
		} catch (error) {
			console.error('Telegram error:', error)
		}
	}

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		await sendToTelegram(formData)
		setSubmitted(true)
		setFormData({ name: '', email: '', message: '' })

		setTimeout(() => setSubmitted(false), 4000)
	}

	return (
		<section id='contact' className='py-20 bg-accent/10'>
			<div className='container mx-auto px-4'>
				<m.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='text-center mb-16'
				>
					<h2 className='text-3xl font-bold mb-4'>Get In Touch</h2>
					<p className='text-lg max-w-2xl mx-auto'>
						Have a project in mind or want to discuss potential opportunities?
						Feel free to reach out!
					</p>
				</m.div>

				<div className='flex flex-col lg:flex-row gap-12'>
					<m.div
						initial={{ x: -50, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className='lg:w-1/3'
					>
						<div className='space-y-6'>
							<div className='flex items-start gap-4'>
								<div className='p-3 bg-primary/10 rounded-full'>
									<Mail className='w-5 h-5 text-primary' />
								</div>
								<div>
									<h3 className='font-medium mb-1'>Email</h3>
									<p className='text-muted-foreground'>pony.123987@yandex.ru</p>
								</div>
							</div>

							<div className='flex items-start gap-4'>
								<div className='p-3 bg-primary/10 rounded-full'>
									<Phone className='w-5 h-5 text-primary' />
								</div>
								<div>
									<h3 className='font-medium mb-1'>Phone</h3>
									<p className='text-muted-foreground'>+7 (922) 243-9000</p>
								</div>
							</div>

							<div className='flex items-start gap-4'>
								<div className='p-3 bg-primary/10 rounded-full'>
									<MapPin className='w-5 h-5 text-primary' />
								</div>
								<div>
									<h3 className='font-medium mb-1'>Location</h3>
									<p className='text-muted-foreground'>Tyumen, Russia</p>
								</div>
							</div>
						</div>
					</m.div>

					<m.div
						initial={{ x: 50, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className='lg:w-2/3'
					>
						{submitted ? (
							<m.div
								initial={{ scale: 0.8, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								className='bg-primary/10 border border-primary/30 p-8 rounded-lg text-center'
							>
								<div className='w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4'>
									<Send className='w-8 h-8 text-primary' />
								</div>
								<h3 className='text-xl font-bold mb-2'>Thank You!</h3>
								<p>
									Your message has been sent successfully. I'll get back to you
									soon.
								</p>
							</m.div>
						) : (
							<form onSubmit={handleSubmit} className='space-y-6'>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
									<div>
										<label htmlFor='name' className='block mb-2 font-medium'>
											Name
										</label>
										<input
											type='text'
											id='name'
											name='name'
											value={formData.name}
											onChange={handleChange}
											required
											className='w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
										/>
									</div>
									<div>
										<label htmlFor='email' className='block mb-2 font-medium'>
											Email
										</label>
										<input
											type='email'
											id='email'
											name='email'
											value={formData.email}
											onChange={handleChange}
											required
											className='w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
										/>
									</div>
								</div>
								<div>
									<label htmlFor='message' className='block mb-2 font-medium'>
										Message
									</label>
									<textarea
										id='message'
										name='message'
										rows={5}
										value={formData.message}
										onChange={handleChange}
										required
										className='w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
									></textarea>
								</div>
								<button
									type='submit'
									className='px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center gap-2'
								>
									<Send className='w-5 h-5' />
									Send Message
								</button>
							</form>
						)}
					</m.div>
				</div>
			</div>
		</section>
	)
}

export default Contact
