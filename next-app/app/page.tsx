import Link from 'next/link'
import AppHeader from './components/Header'
import { Box, Button, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import AppCards from './components/AppCards'
import Image from 'next/image'

import corpcommentImg from '@/public/corpcomment.png'

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
				<Box
					sx={{
						display: {
							xs: 'none',
							md: 'block',
							p: '1rem',
						},
						position: 'relative',
					}}
				>
					<Box
						sx={{
							border: '1px solid black',
							rotate: '3deg',
							position: 'absolute',
							display: 'block',
							height: '100%',
							width: '100%',
						}}
					></Box>
					<Box
						sx={{
							border: '1px solid black',
							rotate: '-2deg',
							position: 'absolute',
							display: 'block',
							height: '100%',
							width: '100%',
							zIndex: 5,
						}}
					></Box>
					<Box
						sx={{
							width: '400px',
							minHeight: '400px',
							p: '2rem',
							border: '1px solid black',
							backgroundColor: 'white',
							position: 'relative',
							zIndex: 10,
						}}
					>
						<Typography>
							Ad incididunt minim fugiat ad pariatur tempor consectetur exercitation
							exercitation do eiusmod exercitation.
						</Typography>

						<Typography>
							Ad incididunt minim fugiat ad pariatur tempor consectetur exercitation
							exercitation do eiusmod exercitation.
						</Typography>
						<Typography>
							Ad incididunt minim fugiat ad pariatur tempor consectetur exercitation
							exercitation do eiusmod exercitation.
						</Typography>
						<Typography>
							Ad incididunt minim fugiat ad pariatur tempor consectetur exercitation
							exercitation do eiusmod exercitation.
						</Typography>
						<Typography>
							Ad incididunt minim fugiat ad pariatur tempor consectetur exercitation
							exercitation do eiusmod exercitation.
						</Typography>
						<Typography>
							Ad incididunt minim fugiat ad pariatur tempor consectetur exercitation
							exercitation do eiusmod exercitation.
						</Typography>
						{/* <Image
							src={corpcommentImg}
							alt="Ricardo portrait"
							width="400"
							height="400"
							quality="95"
							priority={true}
						/> */}
					</Box>
				</Box>
			</Stack>

			<AppCards />
		</Box>
	)
}

export default WelcomePage
