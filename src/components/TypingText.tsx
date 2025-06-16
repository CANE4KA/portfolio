import * as m from 'motion/react-m'
import { useEffect, useState } from 'react'

interface TypingTextProps {
	lines: string[]
	className?: string
}

export const TypingText = ({ lines, className }: TypingTextProps) => {
	const [currentLineIndex, setCurrentLineIndex] = useState(0)
	const [currentText, setCurrentText] = useState('')
	const [isDeleting, setIsDeleting] = useState(false)
	const [typingSpeed, setTypingSpeed] = useState(150)

	useEffect(() => {
		const handleTyping = () => {
			const currentLine = lines[currentLineIndex]

			if (isDeleting) {
				setCurrentText(currentLine.substring(0, currentText.length - 1))
				setTypingSpeed(75)

				if (currentText === '') {
					setIsDeleting(false)
					setCurrentLineIndex((currentLineIndex + 1) % lines.length)
					setTypingSpeed(500)
				}
			} else {
				setCurrentText(currentLine.substring(0, currentText.length + 1))
				setTypingSpeed(150)

				if (currentText === currentLine) {
					setIsDeleting(true)
					setTypingSpeed(2000)
				}
			}
		}

		const timer = setTimeout(handleTyping, typingSpeed)
		return () => clearTimeout(timer)
	}, [currentText, isDeleting, currentLineIndex, lines, typingSpeed])

	return (
		<div className={className}>
			<span>{currentText}</span>
			<m.span
				animate={{ opacity: [0, 1, 0] }}
				transition={{ duration: 0.8, repeat: Infinity }}
				className='ml-1'
			>
				|
			</m.span>
		</div>
	)
}
