import Hotel from './Hotel/Hotel'
import { use } from 'react'
import ThemeContext from '../../context/CreateContext'

const Hotels = ({ hotels }) => {
	const themeContext = use(ThemeContext)

	return (
		<div className='container'>
			<div
				style={{
					border: '1px solid #cdcdcd',
					padding: 10,
				}}
			>
				<h2>Offerts:</h2>
				{hotels.map(hotel => (
					<Hotel
						{...hotel}
						key={hotel.id}
						themeColor={themeContext.color}
					/>
				))}
			</div>
		</div>
	)
}

export default Hotels
