import React from 'react';
import { Step, StepLabel, Stepper } from '@mui/material';

const Steps = () => {
	const clientSteps = ['Personal details', 'Contact details'];
	return (
		<Stepper sx={{
			marginTop: '2rem',
		}}>
			{clientSteps.map((label) => (
				<Step>
					<StepLabel>{label}</StepLabel>
				</Step>
			))}
		</Stepper>
	);
};

export default Steps;