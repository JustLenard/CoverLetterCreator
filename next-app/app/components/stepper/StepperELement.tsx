import { Box, Grid, Paper, Typography } from '@mui/material'
import AppTextField from './AppTextField'
import { StepsData } from '@/app/utils/data'
import { StepKey, StepVal } from '@/app/utils/types'

interface Props {
	step: StepKey
	setValue: (step: StepKey, value: string) => void
	stepVal: StepVal
}

const StepperELement: React.FC<Props> = ({ step, setValue, stepVal }) => {
	const stepData = StepsData[step]

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: {
					xs: 'column',
					md: 'row',
				},
			}}
		>
			<AppTextField initialValue={stepVal[step]} setValue={setValue} step={step} />
			<Box
				sx={{
					flex: 1,
					p: '1rem',
				}}
			>
				<Paper
					sx={{
						flex: 1,
						p: '1rem',
					}}
					elevation={3}
				>
					<Typography variant="h5">{stepData.title}</Typography>

					{stepData.texts.map((text, i) => (
						<p key={i}>{text}</p>
					))}
				</Paper>
			</Box>
		</Box>
	)
}

export default StepperELement
