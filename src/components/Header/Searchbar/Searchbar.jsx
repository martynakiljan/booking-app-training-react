import { use, useEffect, useRef, useState } from 'react'
// import ThemeContext from '../../../context/CreateContext'
import ThemeContext from '../../../context/CreateContext'
export default function Searchbar({ onSearch }) {
	const themeContext = use(ThemeContext)
	const styles = { borderRadius: 8, marginRight: 5 }
	const [value, setValue] = useState('')
	const inputRef = useRef(null)

	useEffect(() => {
		inputRef.current.focus()
	}, [inputRef.current])

	const onSearchFun = () => {
		onSearch(value)
	}

	const onKeyDown = e => {
		if (e.code === 'Enter') onSearch()
	}

	return (
		<div className='d-flex'>
			<input
				ref={inputRef}
				placeholder='Szukaj...'
				style={styles}
				className='form-control'
				onChange={e => setValue(e.target.value)}
				value={value}
				onKeyDown={onKeyDown}
			/>
			<button
				type='button'
				className={`btn btn-${themeContext.color}`}
				onClick={onSearchFun}
			>
				Search
			</button>
		</div>
	)
}
