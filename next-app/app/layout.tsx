import { Box } from '@mui/material'
import type { Metadata } from 'next'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import AppHeader from './components/Header'
import './globals.css'

export const metadata: Metadata = {
	title: 'AI Cover Letter Creator',
	description: 'Create a cover',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<Box
					sx={{
						minHeight: '100vh',
						display: 'flex',
						flexDirection: 'column',
						backgroundColor: '#F3F6F9',
					}}
				>
					<AppHeader />
					<Box
						sx={{
							margin: 'auto',
							flex: '1',
							maxWidth: '1200px',
							width: {
								lg: '1200px',
								xs: '100%',
							},
							p: '1rem',
							boxSizing: 'border-box',
						}}
					>
						{children}
					</Box>
				</Box>
			</body>
		</html>
	)
}
