import { use } from 'react'
import ThemeContext from '../../context/CreateContext'

export default function Footer() {
	const themeColor = use(ThemeContext)

	return (
		<footer className='text-center py-3'>
			<p className={`text-${themeColor}`}>copyright 2025</p>
		</footer>
	)
}
