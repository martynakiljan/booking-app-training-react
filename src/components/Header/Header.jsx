import InspiringQuote from '../Ui/InspiringQuote'
import styles from './Header.module.scss'

export default function Header(props) {
	return (
		<>
			<div className={`${styles.header} `}>
				<InspiringQuote />
				<div>{props.children}</div>
			</div>
		</>
	)
}
