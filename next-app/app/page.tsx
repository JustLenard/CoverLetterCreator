import Link from 'next/link'
import AppHeader from './components/Header'

const WelcomePage = () => {
	return (
		<div>
			<Link href={'/create-cover-letter'}>Click here to get started</Link>
		</div>
	)
}

export default WelcomePage
