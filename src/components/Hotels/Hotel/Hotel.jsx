import styles from './Hotel.module.css'

export default function Hotel({ name, city, rating, description, image }) {
	return (
		<div className={styles.hotel}>
			<div className='row'>
				<div className='col-4'>
					<img
						src={image}
						alt=''
						className='img-fluid img-thumbnail'
					/>
				</div>
				<div className='col-8'>
					<div className='row'>
						<div className='col-6'>
							<p>
								<b>{name}</b>
							</p>
							<span className='badge text-bg-light'>{city}</span>
						</div>
						<div className='col-6'>
							<p>
								<b>Rating: {rating}</b>
							</p>
						</div>
					</div>
				</div>
			</div>

			<p className={styles.description}>{description}</p>

			<div className='text-end'>
				<button className='btn btn-primary'>Show more</button>
			</div>
		</div>
	)
}
