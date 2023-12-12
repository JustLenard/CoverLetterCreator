'use server'

import { FormDataType } from '../utils/types'

// Function to call the third-party API
export async function callThirdPartyAPI(param: FormDataType) {
	console.log('This is proces.env.DB_HOST', process.env.DB_HOST)
	console.log('This is param', param)
	const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${param}`)
	const data = await res.json()

	return data
}
