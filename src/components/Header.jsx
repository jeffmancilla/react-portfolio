import { Link } from 'react-router-dom'
import './Header.css'

const navItems = [
	{
		href: '/about',
		innerHTML: 'About',
	},
	{
		href: '/projects',
		innerHTML: 'Projects',
	},
]

const Header = () => {
	return (
		<header className="Header">
			<nav>
				<Link to="/">JeffM.</Link>
				<div>
					{navItems.map((item, idx) => {
						return (
							<Link to={item.href} key={idx}>
								{item.innerHTML}
							</Link>
						)
					})}
				</div>
			</nav>
		</header>
	)
}

export default Header
