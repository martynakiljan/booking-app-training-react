import { useState } from 'react'

export default function Searchbar({ onSearch }) {
	const styles = { borderRadius: 8, marginRight: 5 }

	const [value, setValue] = useState('')

	const onSearchFun = () => {
		onSearch(value)
	}

	const onKeyDown = e => {
		if (e.code === 'Enter') onSearch()
	}

	return (
		<div className='d-flex'>
			<input
				placeholder='Szukaj...'
				style={styles}
				className='form-control'
				onChange={e => setValue(e.target.value)}
				value={value}
				onKeyDown={onKeyDown}
			/>
			<button
				type='button'
				className='btn btn-primary'
				onClick={onSearchFun}
			>
				Search
			</button>
		</div>
	)
}
