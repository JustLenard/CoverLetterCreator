'use client'

import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { TextField } from '@mui/material'
import AppTextField from './AppTextField'
import { StepsData } from '@/app/utils/data'
import StepperELement from './StepperELement'
import { StepKey, StepVal } from '@/app/utils/types'

const steps = ['Inforamtion about yourself', 'Cover letter example', 'Job / company description']

const getStepValue = (step: number): string => {
	const valInSession = window.sessionStorage.getItem(String(step))
	if (valInSession) return valInSession

	return StepsData[step].initialData
}

const initialStepVal: StepVal = {
	0: getStepValue(0),
	1: getStepValue(1),
	2: getStepValue(2),
}

export default function HorizontalLinearStepper() {
	const [activeStep, setActiveStep] = useState(0)
	const [skipped, setSkipped] = useState(new Set<number>())

	const [stepVal, setStepVal] = useState(initialStepVal)

	const isStepSkipped = (step: number) => {
		return skipped.has(step)
	}

	const handleNext = () => {
		let newSkipped = skipped
		if (isStepSkipped(activeStep)) {
			newSkipped = new Set(newSkipped.values())
			newSkipped.delete(activeStep)
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1)
		setSkipped(newSkipped)
	}

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1)
	}

	const handleReset = () => {
		setActiveStep(0)
	}

	const setValue = (step: StepKey, value: string) => {
		const newVal = { ...stepVal }
		newVal[step] = value
		setStepVal(newVal)
	}

	return (
		<Box sx={{ width: '100%' }}>
			<Stepper activeStep={activeStep}>
				{steps.map((label, index) => {
					const stepProps: { completed?: boolean } = {}
					const labelProps: {
						optional?: React.ReactNode
					} = {}

					if (isStepSkipped(index)) {
						stepProps.completed = false
					}
					return (
						<Step key={label} {...stepProps}>
							<StepLabel {...labelProps}>{label}</StepLabel>
						</Step>
					)
				})}
			</Stepper>
			{activeStep === steps.length ? (
				<>
					<Typography sx={{ mt: 2, mb: 1 }}>
						All steps completed - you&apos;re finished
					</Typography>
					<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
						<Box sx={{ flex: '1 1 auto' }} />
						<Button onClick={handleReset}>Reset</Button>
					</Box>
				</>
			) : (
				<>
					{/* {activeStep === 0 && (
						
					)} */}
					<StepperELement
						setValue={setValue}
						step={activeStep as StepKey}
						stepVal={stepVal}
					/>

					<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
						<Button
							color="inherit"
							disabled={activeStep === 0}
							onClick={handleBack}
							sx={{ mr: 1 }}
						>
							Back
						</Button>
						<Box sx={{ flex: '1 1 auto' }} />
						<Button onClick={handleNext}>
							{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
						</Button>
					</Box>
				</>
			)}
		</Box>
	)
}
