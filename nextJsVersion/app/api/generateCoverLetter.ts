'use server'

import { DEFAULT_MODEL_ID, DEFAULT_TEMPERATURE } from '../utils/constants'
import { FormDataType } from '../utils/types'
import { Configuration, OpenAIApi } from 'openai'

/**
 * Call Open Ai Api to generate cover letter
 **/
export const generateCoverLetter = async (params: FormDataType) => {
	const { coverLetterExample, jobDescription, userInfo } = params

	const configuration = new Configuration({
		organization: process.env.ORGANIAZATION_ID,
		apiKey: process.env.OPENAI_API_KEY,
	})

	const openAiApi = new OpenAIApi(configuration)

	const response = await openAiApi.createChatCompletion({
		model: DEFAULT_MODEL_ID,
		temperature: DEFAULT_TEMPERATURE,
		messages: [
			{
				role: 'user',
				content: createContentToSend(userInfo, coverLetterExample, jobDescription),
			},
		],
	})

	console.log('This is response', response)

	const aiRespone = response.data.choices[0].message?.content ?? 'Something went wrong :('

	return aiRespone
}

const createContentToSend = (
	userInfo: string,
	coverLetterExample: string,
	jobDescription: string
) => {
	const isCoverLetterExamplePresent = coverLetterExample.trim()
		? `Here is a example of a cover letter:
	${coverLetterExample}`
		: ''

	return `Create a short, informal and custom build cover letter for me. 
Here is some information that you must know about me:
${userInfo}

${isCoverLetterExamplePresent}


Here is the job description:
${jobDescription}
`
}
