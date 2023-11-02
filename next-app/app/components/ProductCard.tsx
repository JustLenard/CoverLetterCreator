import AddToCard from './AddToCard'

interface Props {
	name: string
}

const ProductCard: React.FC<Props> = ({ name }) => {
	return (
		<div className="p-2 my-5 bg-sky-500 text-3xl hover:bg-sky-600">
			<div>{name}</div>
			<AddToCard />
		</div>
	)
}

export default ProductCard
