'use client'

import { MAX_WORDS, MIN_WORDS } from '@/app/utils/constants'
import { stepsData } from '@/app/utils/data'
import { wordsLen } from '@/app/utils/funtions'
import { StepKey } from '@/app/utils/types'
import { Paper } from '@mui/material'
import Box from '@mui/material/Box'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { generateCoverLetter } from '../api/generateCoverLetter'
import AppStepper from '../components/stepper/AppStepper'
import AppTextField from '../components/stepper/AppTextField'
import StepperButtons from '../components/stepper/StepperButtons'
import TextDisplayCard from '../components/stepper/TextDisplayCard'

const getStepValue = (step: number): string => {
	const valInSession = window.sessionStorage.getItem(String(step))
	if (valInSession) return valInSession

	return stepsData[step].initialData
}

const getInitialStepVal = () => {
	return {
		0: getStepValue(0),
		1: getStepValue(1),
		2: getStepValue(2),
		3: getStepValue(3),
	}
}

const CreateCoverLetterPage = () => {
	const [activeStep, setActiveStep] = useState(0)
	const [loading, setLoading] = useState(false)
	const [stepValues, setStepValues] = useState(getInitialStepVal())

	const textLength = wordsLen(stepValues[activeStep as StepKey])

	const minWordsErr = [0, 2].includes(activeStep) && textLength < MIN_WORDS
	const maxWordsErr = [0, 1, 2].includes(activeStep) && textLength > MAX_WORDS

	const stepData = stepsData[activeStep]

	const handleNext = async () => {
		window.sessionStorage.setItem(String(activeStep), stepValues[activeStep as StepKey])

		// If it's semi last step
		if (activeStep === 2) {
			handleCoverLetterGeneration()
		} else {
			setActiveStep((prevActiveStep) => prevActiveStep + 1)
		}
	}

	console.time()
	const handleCoverLetterGeneration = async () => {
		try {
			setLoading(true)
			const response = await generateCoverLetter({
				userInfo: stepValues[0],
				coverLetterExample: stepValues[1],
				jobDescription: stepValues[2],
			})

			console.log('This is response', response)
			setLoading(false)
			setActiveStep(3)
			setValue(3, response)
		} catch (err) {
			setLoading(false)
			setActiveStep(3)
			setValue(3, 'Something went wrong :(')
		}
	}
	console.timeEnd()

	/**
	 * Mock up the cover letter creation
	 **/
	// const handleCoverLetterGeneration = async () => {
	// 	try {
	// 		setLoading(true)
	// 		setTimeout(() => {
	// 			setLoading(false)
	// 			setActiveStep(3)
	// 			setValue(3, 'mate')
	// 		}, 1000)
	// 	} catch (err) {
	// 		setLoading(false)
	// 		setActiveStep(3)
	// 		setValue(3, 'Something went wrong :(')
	// 	}
	// }

	const handleBack = () => {
		window.sessionStorage.setItem(String(activeStep), stepValues[activeStep as StepKey])
		setActiveStep((prevActiveStep) => prevActiveStep - 1)
	}

	const handleReset = () => {
		setActiveStep(0)
	}

	const setValue = (step: StepKey, value: string) => {
		const newVal = { ...stepValues }
		newVal[step] = value
		setStepValues(newVal)
	}

	return (
		<Paper
			elevation={3}
			sx={{
				width: '100%',
			}}
		>
			<AppStepper activeStep={activeStep} />
			<Box
				sx={{
					display: 'flex',
					flexDirection: {
						xs: 'column',
						md: 'row',
					},
				}}
			>
				<AppTextField
					value={stepValues[activeStep as StepKey]}
					setValue={setValue}
					step={activeStep as StepKey}
					label={stepData.textAreaLabel}
					minWordsErr={minWordsErr}
					maxWordsErr={maxWordsErr}
				/>
				<TextDisplayCard activeStep={activeStep} />
			</Box>
			<StepperButtons
				activeStep={activeStep}
				handleBack={handleBack}
				handleCoverLetterGeneration={handleCoverLetterGeneration}
				handleNext={handleNext}
				handleReset={handleReset}
				loading={loading}
				buttonDisabled={minWordsErr || maxWordsErr}
			/>
		</Paper>
	)
}

export default dynamic(() => Promise.resolve(CreateCoverLetterPage), { ssr: false })
