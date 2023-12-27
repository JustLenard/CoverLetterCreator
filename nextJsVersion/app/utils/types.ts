export type FormDataType = {
	userInfo: string
	coverLetterExample: string
	jobDescription: string
}

export type StepsDataT = {
	initialData: string
	title: string
	texts: string[]
	textAreaLabel: string
}

export type StepKey = 0 | 1 | 2 | 3

export type StepVal = Record<StepKey, string>
