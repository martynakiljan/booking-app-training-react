import { useState } from 'react'

export default function Searchbar() {
	const styles = { borderRadius: 8, marginRight: 5 }

	const [value, setValue] = useState

	const onSearch = () => {
		console.log('szukaj')
	}

	const onChange = e => {
		setValue(e.target.value)
	}

	return (
		<div className='d-flex'>
			<input
				placeholder='Szukaj...'
				style={styles}
				className='form-control'
				onChange={onChange}
			/>
			<button
				type='button'
				className='btn btn-primary'
				onClick={onSearch}
			></button>
		</div>
	)
}
