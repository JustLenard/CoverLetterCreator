import AddToCard from './AddToCard'

interface Props {
	name: string
}

const ProductCard: React.FC<Props> = ({ name }) => {
	return (
		<div className="border-red-600">
			<div>{name}</div>
			<AddToCard />
		</div>
	)
}

export default ProductCard
