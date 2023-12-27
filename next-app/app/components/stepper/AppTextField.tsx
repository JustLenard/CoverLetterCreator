import { MAX_WORDS, MIN_WORDS } from '@/app/utils/constants'
import { wordsLen } from '@/app/utils/funtions'
import { StepKey } from '@/app/utils/types'
import { Box, TextField, Typography } from '@mui/material'

interface Props {
	value: string
	setValue: (step: StepKey, value: string) => void
	step: StepKey
	label: string
	minWordsErr: boolean
	maxWordsErr: boolean
}

const AppTextField: React.FC<Props> = ({
	setValue,
	value,
	step,
	label,
	minWordsErr,
	maxWordsErr,
}) => {
	const textLength = wordsLen(value)
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
				{minWordsErr && (
					<Typography
						variant="body2"
						textAlign={'left'}
						color={'red'}
					>{`* You need at least ${MIN_WORDS} words to proceed `}</Typography>
				)}
				{maxWordsErr && (
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
