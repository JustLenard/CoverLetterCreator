export const wordsLen = (str: string) => {
	const array = str.trim().split(/\s+/)
	return array.length
}

export const isBrowser = () => typeof window !== 'undefined'
