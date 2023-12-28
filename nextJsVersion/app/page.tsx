import { Box, Button, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import AppCards from './components/AppCards'

import CoverLetter from './components/CoverLetter'

const WelcomePage = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				minHeight: '100%',
			}}
		>
			<Stack
				direction={'row'}
				mb={{
					xs: '2rem',
					md: '5rem',
				}}
				justifyContent={'space-between'}
			>
				<Box
					sx={{
						maxWidth: {
							xs: '100%',
							md: '24rem',
						},
						flex: 1,
						display: {
							xs: 'flex',
							md: 'block',
						},
						justifyContent: 'center',
						flexDirection: 'column',
						alignItems: 'center',
						textAlign: 'center',
					}}
				>
					<Typography variant="h3" fontWeight={'500'}>
						Ai Cover Letter Creator
					</Typography>
					<Typography variant="body1" mb={'1rem'}>
						Are you tired of creating cover letters over and over again? Me too!
					</Typography>
					<Typography variant="body1" mb={'1rem'}>
						This is why this website exists. Create your cover letter in just 3 steps
						using the AI behind ChatGPT
					</Typography>
					<Typography variant="body1">
						{"Don't waste your time again writing them!"}
					</Typography>

					<Button
						variant="contained"
						sx={{
							mt: '2rem',
						}}
					>
						<Link href={'/create-cover-letter'}>Generate Cover letter</Link>
					</Button>
				</Box>
				<CoverLetter />
			</Stack>

			<AppCards />
		</Box>
	)
}

export default WelcomePage
