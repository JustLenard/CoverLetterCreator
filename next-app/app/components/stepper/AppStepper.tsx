'use client'

import { useMediaQuery, useTheme } from '@mui/material'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'

const steps = [
	'Inforamtion about yourself',
	'Cover letter example',
	'Job / company description',
	'Finish',
]

type Props = {
	activeStep: number
}

export const AppStepper: React.FC<Props> = ({ activeStep }) => {
	const theme = useTheme()
	const downMdBreakpoint = useMediaQuery(theme.breakpoints.down('md'))

	return (
		<Stepper
			activeStep={activeStep}
			orientation={downMdBreakpoint ? 'vertical' : 'horizontal'}
			sx={{
				p: '1rem',
			}}
		>
			{steps.map((label) => {
				const stepProps: { completed?: boolean } = {}
				const labelProps: {
					optional?: React.ReactNode
				} = {}

				return (
					<Step key={label} {...stepProps}>
						<StepLabel {...labelProps}>{label}</StepLabel>
					</Step>
				)
			})}
		</Stepper>
	)
}

export default AppStepper
