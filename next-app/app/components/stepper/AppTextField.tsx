import { MAX_WORDS, MIN_WORDS } from '@/app/utils/constants'
import { wordsLen } from '@/app/utils/funtions'
import { StepKey } from '@/app/utils/types'
import { Box, TextField, Typography } from '@mui/material'

interface Props {
	value: string
	setValue: (step: StepKey, value: string) => void
	step: StepKey
	label: string
}

const AppTextField: React.FC<Props> = ({ setValue, value, step, label }) => {
	console.log('This is step', step)
	const textLength = wordsLen(value)
	const showMinWordsErr = (step === 0 || 2) && textLength < MIN_WORDS
	const showMaxWordsErr = (step === 0 || 2) && textLength > MAX_WORDS
	return (
		<Box
			sx={{
				flex: 1,
				p: '1rem',
			}}
		>
			<TextField
				label={label}
				variant="outlined"
				onChange={(e) => setValue(step, e.target.value)}
				value={value}
				multiline
				rows={28}
				fullWidth
			/>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					p: '.5rem',
					alignItems: 'center',
				}}
			>
				{showMinWordsErr && (
					<Typography
						variant="body2"
						textAlign={'left'}
						color={'red'}
					>{`* You need at least ${MIN_WORDS} words to proceed `}</Typography>
				)}
				{showMaxWordsErr && (
					<Typography
						variant="body2"
						textAlign={'left'}
						color={'red'}
					>{`* No more than ${MAX_WORDS} are allowed`}</Typography>
				)}

				<Typography
					fontWeight={'500'}
					variant="body1"
					ml={'auto'}
				>{`${textLength}/${MAX_WORDS}`}</Typography>
			</Box>
		</Box>
	)
}

export default AppTextField
