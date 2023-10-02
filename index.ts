import { Configuration, OpenAIApi } from 'openai'
import { createCoverLetterName } from './utils/utils'
import {
	ABOUT_ME_PATH,
	COVER_LETTER_EXAMPLE_PATH,
	DEFAULT_MODEL_ID,
	DEFAULT_TEMPERATURE,
	JOB_DESCRIPTION_PATH,
} from './utils/constants'

const configuration = new Configuration({
	organization: process.env.ORGANIAZATION_ID,
	apiKey: process.env.OPENAI_API_KEY,
})

const openAiApi = new OpenAIApi(configuration)

const aboutMe = await Bun.file(ABOUT_ME_PATH).text()
const coverLetterExample = await Bun.file(COVER_LETTER_EXAMPLE_PATH).text()
const jobDescription = await Bun.file(JOB_DESCRIPTION_PATH).text()

const contentToSend = `Create a short, informal and custom build cover letter for me. 
Here is some information that you must know about me:
${aboutMe}

Here is a example of a cover letter:
${coverLetterExample}

Here is the job description:
${jobDescription}
`

const response = await openAiApi.createChatCompletion({
	model: DEFAULT_MODEL_ID,
	temperature: DEFAULT_TEMPERATURE,
	messages: [
		{
			role: 'user',
			content: contentToSend,
		},
	],
})

console.log('This is response', response)
console.log('This is usage', response.data.usage)

const aiRespone = response.data.choices[0].message?.content

await Bun.write(await createCoverLetterName(), aiRespone!)

console.log('This is aiRespone', aiRespone)
