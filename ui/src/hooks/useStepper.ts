import { ReactElement, useState } from 'react';

const useStepper = (steps: ReactElement[]) => {
	const [activeStep, setActiveStepIndex] = useState(0);

	const next = () => {
		setActiveStepIndex(i => {
			return i >= steps.length - 1 ? i : i + 1;
		});
	};
	const back = () => {
		setActiveStepIndex(i => {
			return i <= 0 ? i : i - 1;
		});
	};

	return {
		next,
    back,
		activeStep,
		steps,
	};
};

export default useStepper;