'use client'

import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { useTheme, CircularProgress, Divider, TextField, useMediaQuery } from '@mui/material'
import AppTextField from './AppTextField'
import { StepsData } from '@/app/utils/data'
import StepperELement from './StepperELement'
import { StepKey, StepVal } from '@/app/utils/types'
import { generateCoverLetter } from '@/app/api/generateCoverLetter'
import { green } from '@mui/material/colors'

const steps = [
	'Inforamtion about yourself',
	'Cover letter example',
	'Job / company description',
	'Finish',
]

const getStepValue = (step: number): string => {
	const valInSession = window.sessionStorage.getItem(String(step))
	// if (valInSession) return valInSession

	return StepsData[step].initialData
}

const initialStepVal: StepVal = {
	0: getStepValue(0),
	1: getStepValue(1),
	2: getStepValue(2),
	3: getStepValue(3),
}

export default function HorizontalLinearStepper() {
	const theme = useTheme()
	const downMdBreakpoint = useMediaQuery(theme.breakpoints.down('md'))

	const [activeStep, setActiveStep] = useState(3)
	const [loading, setLoading] = useState(false)
	const [stepVal, setStepVal] = useState(initialStepVal)

	const handleNext = async () => {
		window.sessionStorage.setItem(String(activeStep), stepVal[activeStep as StepKey])

		// If it's semi last step
		if (activeStep === steps.length - 2) {
			handleCoverLetterGeneration()
		} else {
			setActiveStep((prevActiveStep) => prevActiveStep + 1)
		}
	}

	// const handleCoverLetterGeneration = async () => {
	// 	try {
	// 		setLoading(true)
	// 		const response = await generateCoverLetter({
	// 			userInfo: stepVal[0],
	// 			coverLetterExample: stepVal[1],
	// 			jobDescription: stepVal[2],
	// 		})

	// 		console.log('This is response', response)
	// 		setLoading(false)
	// 		setActiveStep(3)
	// 		setValue(3, response)
	// 	} catch (err) {
	// 		setLoading(false)
	// 		setActiveStep(3)
	// 		setValue(3, 'Something went wrong :(')
	// 	}
	// }

	const handleCoverLetterGeneration = async () => {
		try {
			setLoading(true)
			setTimeout(() => {
				setLoading(false)
				setActiveStep(3)
				setValue(3, 'mate')
			}, 1000)
		} catch (err) {
			setLoading(false)
			setActiveStep(3)
			setValue(3, 'Something went wrong :(')
		}
	}

	const handleBack = () => {
		window.sessionStorage.setItem(String(activeStep), stepVal[activeStep as StepKey])
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
		<Box
			sx={{
				width: '100%',
			}}
		>
			<Stepper
				activeStep={activeStep}
				orientation={downMdBreakpoint ? 'vertical' : 'horizontal'}
				sx={{
					p: '1rem',
				}}
			>
				{steps.map((label, index) => {
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

			<StepperELement setValue={setValue} step={activeStep as StepKey} stepVal={stepVal} />

			<Box sx={{ display: 'flex', flexDirection: 'row', p: '1rem' }}>
				{activeStep !== 0 && (
					<Button
						disabled={activeStep === 0}
						onClick={handleBack}
						sx={{ mr: 1 }}
						variant="outlined"
						size="small"
					>
						Back
					</Button>
				)}
				<Box sx={{ flex: '1 1 auto' }} />

				{activeStep === steps.length - 1 ? (
					<>
						<Button
							onClick={handleCoverLetterGeneration}
							disabled={loading}
							size="small"
							sx={{
								mr: '1rem',
							}}
						>
							Regenerate Cover Letter
							{creteCircularProgress(loading)}
						</Button>
						<Button onClick={handleReset} size="small" variant="contained">
							Start again
						</Button>
					</>
				) : (
					<Button
						onClick={handleNext}
						disabled={loading}
						size="small"
						variant="contained"
					>
						{activeStep === steps.length - 2 ? 'Generate cover letter' : 'Next'}
						{creteCircularProgress(loading)}
					</Button>
				)}
			</Box>
		</Box>
	)
}

const creteCircularProgress = (loading: boolean) => {
	return (
		loading && (
			<CircularProgress
				size={24}
				sx={{
					color: green[500],
					position: 'absolute',
					top: '50%',
					left: '50%',
					marginTop: '-12px',
					marginLeft: '-12px',
				}}
			/>
		)
	)
}
