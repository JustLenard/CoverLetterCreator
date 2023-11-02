'use client'

const AddToCard = () => {
	const handleClick = () => {
		console.log('Click')
	}
	return (
		<button className="btn" onClick={handleClick}>
			Add to card
		</button>
	)
}

export default AddToCard
