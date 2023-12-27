import { CircularProgress } from '@mui/material'
import { green } from '@mui/material/colors'

export const creteCircularProgress = (loading: boolean) => {
	return (
		loading && (
			<CircularProgress
				size={24}
				sx={{
					color: green[500],
					position: 'absolute',
					top: '50%',
					left: '50%',
					marginTop: '-12px',
					marginLeft: '-12px',
				}}
			/>
		)
	)
}
