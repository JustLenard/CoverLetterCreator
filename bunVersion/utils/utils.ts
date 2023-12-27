import { readdir } from 'node:fs/promises'

export const createCoverLetterName = async () => {
	const fileNames = await readdir(`./coverLetters`)

	let maxNumber = 0
	fileNames.forEach((fileName) => {
		try {
			const covLetterNumber = Number(fileName.split('-')[1].split('.')[0])
			if (covLetterNumber > maxNumber) {
				maxNumber = covLetterNumber
			}
		} catch (err) {
			console.log(err)
		}
	})
	return `coverLetters/coverLetter-${maxNumber + 1}.txt`
}
