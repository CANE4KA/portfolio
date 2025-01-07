import { useEffect, useState } from 'react'

interface ITypingText {
	line: string
}

export const TypingText = ({ line }: ITypingText) => {
	const [text, setText] = useState('')
	const [position, setPosition] = useState(0)
	const [isDeleting, setIsDeleting] = useState(false)

	const typingSpeed = 150
	const deletingSpeed = 75

	useEffect(() => {
		const timer = setTimeout(
			() => {
				if (isDeleting) {
					setText(line.substring(0, position - 1))
					setPosition(position - 1)

					if (position === 0) {
						setIsDeleting(false)
					}
				} else {
					setText(line.substring(0, position + 1))
					setPosition(position + 1)
					if (position === line.length) {
						setIsDeleting(true)
					}
				}
			},
			isDeleting ? deletingSpeed : typingSpeed
		)

		return () => clearTimeout(timer)
	}, [text, position, isDeleting])

	return <h1 className='title text-4xl text-orange-500'>{text}</h1>
}
