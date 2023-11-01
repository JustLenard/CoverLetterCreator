import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default async function Home() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await res.json()

	console.log('This is data', data)

	return (
		<div>
			<h1>Home</h1>

			<h2>users</h2>

			<ul>
				{data.map((user) => {
					return (
						<li key={user.id}>
							<ProductCard name={user.name} />
						</li>
					)
				})}
			</ul>

			<Link href={'/kusers'}>users</Link>
		</div>
	)
}
