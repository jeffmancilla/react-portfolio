import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import './Footer.css'

const Footer = () => {
	return (
		<footer className="Footer">
			<p>
				Jeff Mancilla 2023. Powered by{' '}
				<img src={viteLogo} className="logo" alt="Vite logo" /> +{' '}
				<img src={reactLogo} className="logo" alt="React logo" />
			</p>
		</footer>
	)
}

export default Footer
