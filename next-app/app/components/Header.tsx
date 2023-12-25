import { Box, Button, Card, Paper, Typography } from '@mui/material'
import Link from 'next/link'

const AppHeader = () => {
	return (
		<Box
			sx={{
				mb: '1rem',
				borderRadius: '0px',
			}}
		>
			<Box
				sx={{
					maxWidth: '1200px',
					margin: 'auto',
					// display: 'box',
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<Link href={'/'}>
					<Typography
						variant="h5"
						p={'1rem'}
						fontWeight={'bold'}
						sx={{
							textDecorationLine: 'underline',
						}}
					>
						Ai Tools
					</Typography>
				</Link>
				{/* <Box
					sx={{
						display: 'inline-block',
						my: 'auto',
					}}
				>
					<Link href={'/create-cover-letter'}>
						<Button>Generate Cover Letter</Button>
					</Link>
				</Box> */}
			</Box>
		</Box>
	)
}

export default AppHeader
