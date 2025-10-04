import moment from 'moment'
import { useEffect, useState } from 'react'

export default function BestHotel(props) {
	const endTime = moment().add(23, 'minutes').add(34, 'seconds')
	const [time, setTime] = useState('')

	useEffect(() => {
		const interval = setInterval(() => {
			const leftTime = endTime.diff(moment()) / 1000
			const min = Math.round(leftTime / 60)
			const sec = Math.round(leftTime % 60)

			setTime(`minut: ${min}, sekund: ${sec}`)
		}, 1000)

		return () => {
			clearInterval(interval)
		}
	}, [])

	if (!props.hotel) return null

	return (
		<div className='card bg-success text-white'>
			<div className='card-header'>The Best Offer!</div>
			<div className='card-body'>
				<div className='d-flex justify-content-between'>
					<h5 className='card-title'>{props.hotel.name}</h5>
					<p>Rating: {props.hotel.rating}</p>
				</div>
				<p>Time left until the end of the offer: {time}</p>
				<button
					onClick={props.onShow}
					className='btn btn-sm btn-light'
				>
					Show!
				</button>
			</div>
		</div>
	)
}
