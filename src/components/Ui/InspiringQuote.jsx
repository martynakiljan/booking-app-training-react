import { useLayoutEffect, useState } from 'react'

const quotes = [
	'Travel is the only thing you spend money on that makes you richer. – Anonymous',
	'Traveling teaches humility. You see how little space you occupy in the world. – Gustave Flaubert',
	'Life gives each person as much as they have the courage to take, and I won’t give up anything that is rightfully mine. – Jacek Pałkiewicz',
	'Don’t wait. The time will never be perfect. – Napoleon Hill',
	'I love the feeling of being anonymous in a city I’ve never been to before. – Bill Bryson',
	'If you think adventures are dangerous, try routine. It is lethal. – Paulo Coelho',
	'If our destiny was to stay in one place, we would have roots instead of feet. – Rachel Wolchin',
]

export default function InspiringQuote() {
	const [quote, setQuote] = useState('Loading quote...')

	useLayoutEffect(() => {
		const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
		setQuote(randomQuote)
	}, [])

	return (
		<p
			style={{
				position: 'absolute',
				top: 10,
				left: 0,
				right: 0,
				fontSize: 12,
				textAlign: 'center',
				color: '#fff',
				fontStyle: 'italic',
			}}
		>
			{quote}
		</p>
	)
}
