'use-client'
import { useState } from 'react'

const FormComponent = ({ onSubmit }) => {
	const [formData, setFormData] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		onSubmit(formData)
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Data:
				<input type="text" value={formData} onChange={(e) => setFormData(e.target.value)} />
			</label>
			<button type="submit">Submit</button>
		</form>
	)
}

export default FormComponent
