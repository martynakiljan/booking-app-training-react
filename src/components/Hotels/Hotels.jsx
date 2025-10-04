import { use } from 'react'
import ThemeContext from '../../context/CreateContext'
import BestHotel from './Hotel/BestHotel'
import Hotel from './Hotel/Hotel'

const Hotels = ({ hotels }) => {
	const count = hotels.length

	const themeContext = use(ThemeContext)

const bestHotel =
  count > 1
    ? [...hotels].sort((a, b) => (parseFloat(b.rating) || 0) - (parseFloat(a.rating) || 0))[0]
    : null

	const showBestHotel = () => {}

	return (
		<div className='container'>
			<h6>Offerts: ({count})</h6>
			<BestHotel
				hotel={bestHotel}
				onShow={showBestHotel}
			/>
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
