import { Box, Card, Paper, Typography } from '@mui/material'

const AppHeader = () => {
	return (
		<Card
			sx={{
				mb: '1rem',
				borderRadius: '0px',
			}}
		>
			<Box
				sx={{
					maxWidth: '1200px',
					margin: 'auto',
					display: 'box',
				}}
			>
				<Typography variant="h5" p={'1rem'}>
					Cover letter creator
				</Typography>
			</Box>
		</Card>
	)
}

export default AppHeader
