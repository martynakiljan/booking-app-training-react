import Hotel from './Hotel/Hotel'

const Hotels = ({ hotels }) => {
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
					/>
				))}
			</div>
		</div>
	)
}

export default Hotels
