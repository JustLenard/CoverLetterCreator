import { Grid } from '@mui/material'
import Looks4OutlinedIcon from '@mui/icons-material/Looks4Outlined'

import AppCard from './AppCard'
import { cardsData } from '../utils/data'

// export const cardsData = [
// 	{
// 		title: 'Who are you?',
// 		content: 'Tell us some information about yourself',
// 		icon: <Looks4OutlinedIcon sx={{ fontSize: '3rem' }} />,
// 	},
// 	{
// 		title: 'Chose template',
// 		content: 'If you want a more structured output, create a template for your cover letter',
// 		icon: <Looks4OutlinedIcon sx={{ fontSize: '3rem' }} />,
// 	},
// 	{
// 		title: 'What is the job?',
// 		content: 'Tell us about the job. Feel free to just copy paste the job posting',
// 		icon: <Looks4OutlinedIcon sx={{ fontSize: '3rem' }} />,
// 	},
// 	{
// 		title: 'You are done!',
// 		content: 'Feel free to use your tailor made cover letter',
// 		icon: <Looks4OutlinedIcon sx={{ fontSize: '3rem' }} />,
// 	},
// ] as const

const AppCards = () => {
	return (
		<Grid
			container
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				mt: '3rem',
			}}
		>
			{cardsData.map((data, i) => (
				<AppCard {...data} key={i} />
			))}
		</Grid>
	)
}

export default AppCards
