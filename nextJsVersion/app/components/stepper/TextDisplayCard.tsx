import { stepsData } from '@/app/utils/data'
import { Box, Paper, Typography } from '@mui/material'

interface Props {
	activeStep: number
}

const TextDisplayCard: React.FC<Props> = ({ activeStep }) => {
	const stepData = stepsData[activeStep]

	return (
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
				<Typography variant="h5" fontWeight={'500'}>
					{stepData.title}
				</Typography>

				{stepData.texts.map((text, i) => (
					<Typography variant="body1" key={i} my={'1rem'}>
						{text}
					</Typography>
				))}
			</Paper>
		</Box>
	)
}

export default TextDisplayCard
