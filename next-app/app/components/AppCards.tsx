import { Grid } from '@mui/material'

import { cardsData } from '../utils/data'
import AppCard from './AppCard'

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
