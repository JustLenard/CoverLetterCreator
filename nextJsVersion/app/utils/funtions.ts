export const wordsLen = (str: string) => {
	const array = str.trim().split(/\s+/)
	return array.length
}
