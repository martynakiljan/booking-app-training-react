import Spinner from 'react-bootstrap/Spinner'

const LoadingIcon = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh', 
				width: '100vw',  
			}}
		>
			<Spinner animation='border' role='status'>
				<span className='visually-hidden'>Loading...</span>
			</Spinner>
		</div>
	)
}

export default LoadingIcon
