import Link from 'next/link'
import AppHeader from './components/Header'
import { Button, Typography } from '@mui/material'

const WelcomePage = () => {
	return (
		<div>
			<Typography variant="h3"> Ai Cover letter creator</Typography>
			<Typography variant="body2" mb={'1rem'}>
				Are you tired of creating cover letters over and over again? Me too! So I created
				this website to make it easier to create them using Ai in 3 easy steps
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
	)
}

export default WelcomePage
