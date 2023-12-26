'use client'

import { Box, Typography } from '@mui/material'
import { frontPageCoverLetter } from '../utils/data'
import { TypeAnimation } from 'react-type-animation'

const CURSOR_CLASS_NAME = 'custom-type-animation-cursor'

const CoverLetter = () => {
	return (
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
				<TypeAnimation
					splitter={(str) => str.split(/(?= )/)}
					className={CURSOR_CLASS_NAME}
					cursor={false}
					sequence={[
						frontPageCoverLetter,
						(el) => el?.classList.remove(CURSOR_CLASS_NAME),
					]}
					speed={{ type: 'keyStrokeDelayInMs', value: 30 }}
					style={{
						fontSize: '0.875rem',
						display: 'block',
						minHeight: '200px',
						whiteSpace: 'pre-line',
					}}
				/>
			</Box>
		</Box>
	)
}

export default CoverLetter
