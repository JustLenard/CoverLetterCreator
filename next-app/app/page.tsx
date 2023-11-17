'use client'
import { useState } from 'react'

const MyComponent = () => {
	const [inputValue, setInputValue] = useState('')
	const [responseData, setResponseData] = useState(null)

	const fetchData = async () => {
		try {
			// Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
			const response = await fetch(`route=${inputValue}`)
			const data = await response.json()
			setResponseData(data)
		} catch (error) {
			console.error('Error fetching data:', error)
		}
	}

	const handleInputChange = (e) => {
		setInputValue(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		fetchData()
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					Enter something:
					<input type="text" value={inputValue} onChange={handleInputChange} />
				</label>
				<button type="submit">Fetch Data</button>
			</form>

			{responseData && (
				<div>
					<h2>API Response:</h2>
					<pre>{JSON.stringify(responseData, null, 2)}</pre>
				</div>
			)}
		</div>
	)
}

export default MyComponent
