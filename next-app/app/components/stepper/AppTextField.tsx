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
				rows={30}
				fullWidth
			/>
			<Box>
				<Typography
					fontWeight={'500'}
					variant="body1"
					m={'.5rem .5rem 0 0'}
					textAlign={'right'}
				>{`${wordsLen(value)}/1000`}</Typography>
			</Box>
		</Box>
	)
}

export default AppTextField
