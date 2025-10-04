import { useEffect, useState, use } from 'react'
import Header from '../Header/Header'
import Hotels from '../Hotels/Hotels'
import Menu from '../Menu/Menu'
import './App.css'
import LoadingIcon from '../Ui/LoadingIcon'
import Layout from '../Layout/Layout'
import Footer from '../Footer/Footer'
import ThemeButton from '../Ui/ThemeButton'
import ThemeContext from '../../context/CreateContext'
import Searchbar from '../Header/Searchbar/Searchbar'
import AuthContext from '../../context/AuthContext'

function App() {
	const hotelsArr = [
		{
			id: 1,
			name: 'Lux Star Hotel',
			city: 'Tokyo',
			rating: '4.5',
			description: 'Modern hotel in the heart of Tokyo, offering luxury rooms and a panoramic city view.',
			image: 'https://picsum.photos/id/1018/400/300',
		},
		{
			id: 2,
			name: 'Ocean Breeze Resort',
			city: 'Phuket',
			rating: '4.7',
			description: 'Beachfront resort with an infinity pool and private bungalows.',
			image: 'https://picsum.photos/id/1015/400/300',
		},
		{
			id: 3,
			name: 'Alpine View Lodge',
			city: 'Zermatt',
			rating: '4.6',
			description: 'Cozy mountain lodge with stunning views of the Matterhorn, perfect for skiers.',
			image: 'https://picsum.photos/id/1016/400/300',
		},
		{
			id: 4,
			name: 'Desert Mirage Hotel',
			city: 'Dubai',
			rating: '4.8',
			description: 'Luxury hotel with a rooftop terrace and world-class dining options.',
			image: 'https://picsum.photos/id/1025/400/300',
		},
		{
			id: 5,
			name: 'Riverside Palace',
			city: 'Paris',
			rating: '4.4',
			description: 'Hotel near the Seine River, offering elegant interiors and a romantic atmosphere.',
			image: 'https://picsum.photos/id/1035/400/300',
		},
		{
			id: 6,
			name: 'Golden Gate Inn',
			city: 'San Francisco',
			rating: '4.3',
			description: 'Charming inn near the Golden Gate Bridge, perfect base for sightseeing.',
			image: 'https://picsum.photos/id/1040/400/300',
		},
		{
			id: 7,
			name: 'Safari Sunset Lodge',
			city: 'Nairobi',
			rating: '4.6',
			description: 'African-style lodge with a view of the savannah, ideal for safari adventures.',
			image: 'https://picsum.photos/id/1060/400/300',
		},
		{
			id: 8,
			name: 'Skyline Tower Hotel',
			city: 'New York',
			rating: '4.7',
			description: 'Skyscraper hotel in Manhattan with a rooftop deck overlooking the Empire State Building.',
			image: 'https://picsum.photos/id/1070/400/300',
		},
		{
			id: 9,
			name: 'Emerald Bay Resort',
			city: 'Koh Samui',
			rating: '4.9',
			description: 'Exclusive resort with a private beach and spa located in a tropical bay.',
			image: 'https://picsum.photos/id/1080/400/300',
		},
		{
			id: 10,
			name: 'Royal Garden Hotel',
			city: 'London',
			rating: '4.2',
			description: 'Stylish hotel overlooking Hyde Park, combining modern comfort with classic charm.',
			image: 'https://picsum.photos/id/1090/400/300',
		},
	]
	const [hotels, setHotels] = useState(hotelsArr)
	const [loading, setLoading] = useState(true)
	const [themeColor, setThemeColor] = useState('primary')
	const [user, setUser] = useState(null)

	useEffect(() => {
		setTimeout(() => {
			setHotels(hotelsArr)
			setLoading(false)
		}, 200)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const onSearch = value => {
		if (!value) {
			setHotels(hotelsArr)
			return
		}
		const filtredHotels = hotelsArr.filter(x => x.name.toLowerCase().includes(value.toLowerCase()))
		setHotels(filtredHotels)
	}

	const changeColor = () => {
		setThemeColor(themeColor === 'danger' ? 'primary' : 'danger')
	}

	const header = (
		<Header>
			<div
				className='d-flex'
				style={{ gap: 10 }}
			>
				<Searchbar onSearch={onSearch} />
				<ThemeButton />
			</div>
		</Header>
	)

	const content = loading ? <LoadingIcon /> : <Hotels hotels={hotels} />

	return (
		<ThemeContext.Provider
			value={{
				color: themeColor,
				changeColor,
			}}
		>
			<AuthContext.Provider
				value={{
					isAuthenticated: !!user,
					logIn: () => setUser(true),
					logOut: () => setUser(false),
				}}
			>
				<Layout
					header={header}
					menu={<Menu />}
					content={content}
					footer={<Footer />}
				/>
			</AuthContext.Provider>
		</ThemeContext.Provider>
	)
}

export default App
