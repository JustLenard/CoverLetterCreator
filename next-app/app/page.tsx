import Link from 'next/link'
import AppHeader from './components/Header'
import { Box, Button, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import AppCards from './components/AppCards'
import Image from 'next/image'

import corpcommentImg from '@/public/corpcomment.png'

const WelcomePage = () => {
	// const theme = useTheme()
	// const UpMdBreakpoint = useMediaQuery(theme.breakpoints.up('md'))
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				minHeight: '100%',
			}}
		>
			<Stack direction={'row'} mb={'5rem'}>
				<div>
					<Typography variant="h3"> Ai Cover letter creator</Typography>
					<Typography variant="body2" mb={'1rem'}>
						Are you tired of creating cover letters over and over again? Me too! So I
						created this website to make it easier to create them using Ai in 3 easy
						steps
					</Typography>
					<Typography variant="body2">{"Don't waste time again writing them"}</Typography>

					<Button
						variant="contained"
						sx={{
							mt: '2rem',
						}}
					>
						<Link href={'/create-cover-letter'}>Click here to get started</Link>
					</Button>
				</div>
				<Box
					sx={{
						display: {
							xs: 'none',
							md: 'block',
							p: '1rem',
						},
					}}
				>
					<Image
						src={corpcommentImg}
						alt="Ricardo portrait"
						width="400"
						height="400"
						quality="95"
						priority={true}
					/>
				</Box>
			</Stack>

			<AppCards />
		</Box>
	)
}

export default WelcomePage
