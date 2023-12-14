import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
	return (
		<header className="Header">
			<nav>
				<Link to="/">JeffM .</Link>
				<div>
					<Link to="/projects">Projects</Link>
					<a href="https://linkedin.com/in/jeffmancilla">LinkedIn</a>
					<a href="https://github.com/jeffmancilla">GitHub</a>
				</div>
			</nav>
		</header>
	)
}

export default Header
