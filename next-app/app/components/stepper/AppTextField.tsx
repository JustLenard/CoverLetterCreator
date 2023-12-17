import { StepKey } from '@/app/utils/types'
import { Box, TextField } from '@mui/material'

interface Props {
	initialValue: string
	setValue: (step: StepKey, value: string) => void
	step: StepKey
	label: string
}

const AppTextField: React.FC<Props> = ({ setValue, initialValue, step, label }) => {
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
				value={initialValue}
				multiline
				rows={30}
				fullWidth
			/>
		</Box>
	)
}

export default AppTextField
