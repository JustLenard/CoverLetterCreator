import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

interface Props {
	title: string
	content: string
	icon: any
}

const AppCard: React.FC<Props> = ({ icon, title, content }) => {
	return (
		<Grid
			item
			sx={{
				// border: '1px solid red',
				width: {
					xl: '250px',
					xs: '100%',
				},
			}}
		>
			<Box
				sx={{
					// border: '2px solid green',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					p: '1rem',
				}}
			>
				{React.createElement(icon, {
					sx: {
						fontSize: '3rem',
					},
				})}
				<Typography variant="h5" my={'.5rem'} textAlign={'center'}>
					{title}
				</Typography>
				<Typography variant="body1" textAlign={'center'}>
					{content}
				</Typography>
			</Box>
		</Grid>
	)
}

export default AppCard
