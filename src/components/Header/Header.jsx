import styles from './Header.module.scss'
import Searchbar from './Searchbar/Searchbar'

export default function Header({ onSearch }) {
	return (
		<div className={`${styles.header} container`}>
			<div>
				<Searchbar onSearch={onSearch} />
			</div>
		</div>
	)
}
