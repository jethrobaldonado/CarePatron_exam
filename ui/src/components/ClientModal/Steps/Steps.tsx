import React from 'react';
import { Step, StepLabel, Stepper } from '@mui/material';

const Steps = ({ activeStep }: { activeStep: number }) => {
	const stepLabels = ['Personal details', 'Contact details'];

	return (
		<Stepper sx={{
			marginTop: '2rem',
		}}
				 activeStep={activeStep}
		>
			{stepLabels.map((label, index) => (
				<Step key={`step_${index}`}>
					<StepLabel>{label}</StepLabel>
				</Step>
			))}
		</Stepper>
	);
};

export default Steps;