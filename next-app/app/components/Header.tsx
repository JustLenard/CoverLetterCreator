import { Box, Typography } from '@mui/material'

const AppHeader = () => {
	return (
		<Box
			sx={{
				bgcolor: 'red',
			}}
		>
			<Box
				sx={{
					maxWidth: '1280px',
					margin: 'auto',
					display: 'box',
				}}
			>
				<Typography variant="h5" p={'1rem'}>
					Cover letter creator
				</Typography>
			</Box>
		</Box>
	)
}

export default AppHeader
