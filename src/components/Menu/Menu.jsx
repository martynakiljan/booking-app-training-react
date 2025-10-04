import AuthContext from '../../context/AuthContext'
import styles from './Menu.module.css'
import { use } from 'react'
export default function Menu() {
	const authContext = use(AuthContext)

	return (
		<div className='container'>
			<ul className={styles.menu}>
				<li className={styles.menuItem}>
					<a href='#'>Home</a>
				</li>
				{authContext.isAuthenticated ? (
					<a
						href='#'
						onClick={authContext.logOut}
					>
						Log out
					</a>
				) : (
					<a
						href='#'
						onClick={authContext.logIn}
					>
						Log in
					</a>
				)}
			</ul>
		</div>
	)
}
