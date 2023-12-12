import Link from 'next/link'

const WelcomePage = () => {
	return (
		<div>
			<h1>welcome . Crete cover letter</h1>
			<Link href={'/create-cover-letter'}>Click here to get started</Link>
		</div>
	)
}

export default WelcomePage
