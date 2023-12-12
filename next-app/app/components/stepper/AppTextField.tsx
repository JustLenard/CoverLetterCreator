import { StepKey } from '@/app/utils/types'
import { Box, TextField } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'

interface Props {
	initialValue: string
	setValue: (step: StepKey, value: string) => void
	step: StepKey
}

const AppTextField: React.FC<Props> = ({ setValue, initialValue, step }) => {
	return (
		<Box
			sx={{
				flex: 1,
				p: '1rem',
			}}
		>
			<TextField
				label="Outlined"
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
