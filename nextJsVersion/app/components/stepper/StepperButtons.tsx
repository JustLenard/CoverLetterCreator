import { Box, Button } from '@mui/material'
import { creteCircularProgress } from '../createCircularProgress'

interface Props {
	activeStep: number
	handleBack: () => void
	handleCoverLetterGeneration: () => void
	handleReset: () => void
	handleNext: () => void
	loading: boolean
	buttonDisabled: boolean
}

const StepperButtons: React.FC<Props> = ({
	activeStep,
	handleBack,
	handleCoverLetterGeneration,
	handleNext,
	handleReset,
	loading,
	buttonDisabled,
}) => {
	return (
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

			{activeStep === 3 ? (
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
					disabled={loading || buttonDisabled}
					size="small"
					variant="contained"
				>
					{activeStep === 2 ? 'Generate cover letter' : 'Next'}
					{creteCircularProgress(loading)}
				</Button>
			)}
		</Box>
	)
}

export default StepperButtons
