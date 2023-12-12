'use client'

import { useState } from 'react'
import { callThirdPartyAPI } from '../api/submitData'
import { Button } from '@mui/material'
import HorizontalLinearStepper from '../components/stepper/Stepper'

const CreateCoverLetter = () => {
	return (
		<div>
			<h1>header</h1>

			<HorizontalLinearStepper />
		</div>
	)
}

export default CreateCoverLetter
