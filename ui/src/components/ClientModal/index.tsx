import React, { useCallback, useEffect, useState } from 'react';
import CreateButton from './CreateButton/CreateButton';
import { Box, Modal, Typography } from '@mui/material';
import Steps from './Steps/Steps';
import { ArrowBack, Close } from '@mui/icons-material';
import Button from '@mui/material/Button';
import ContactDetailsForm from './Form/ContactDetailsForm';
import useStepper from '../../hooks/useStepper';
import PersonalDetailsForm from './Form/PersonalDetailsForm';
import styles from './Form/form.styles';
import useClientHook from '../../hooks/useClientHook';
import { ContactDetailFields, PersonalDetailFields } from './Form/FormFields';

const style = {
	root: {
		position: 'absolute' as 'absolute',
		top: '20%',
		left: '50%',
		transform: 'translateX(-50%)',
		width: 400,
		bgcolor: 'background.paper',
		border: 'none',
		boxShadow: 24,
		p: 4,
		outline: 'none',
	},
	header: {
		display: 'flex',
		justifyContent: 'space-between',
	},
};

const ClientModal = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const openModal = () => {
		setModalOpen(true);
	};
	const {
		data,
		inputOnChange,
		validateForm,
		errorBag,
		validated,
		submit,
	} = useClientHook([PersonalDetailFields, ContactDetailFields]);

	const { steps, activeStep, next, back } = useStepper([
		<PersonalDetailsForm
			errors={errorBag}
			data={data}
			onChange={inputOnChange} />,
		<ContactDetailsForm
			errors={errorBag}
			data={data}
			onChange={inputOnChange} />]);

	const handleNextClick = () => {
		validateForm(activeStep);
	};

	useEffect(() => {
		if (!Object.entries(errorBag).length && validated) {
			if (activeStep === steps.length - 1) {
				submit();
			} else {
				next();
			}
		}

		if (!validated) {
			setModalOpen(false);
			back();
		}

	}, [errorBag, validated]);

	return (
		<>
			<CreateButton onClick={openModal} />
			<Modal open={modalOpen}>
				<Box sx={style.root}>
					<Box sx={style.header}>
						<Typography id='modal-modal-title' variant='h6' component='h2'>
							Create new client
						</Typography>
						<Button onClick={() => setModalOpen(false)}><Close /></Button>
					</Box>
					<Steps activeStep={activeStep} />
					{steps[activeStep]}

					{activeStep < steps.length - 1 && (
						<Box sx={{
							...styles.buttonContainer,
							justifyContent: 'end',
						}}>
							<Button variant={'contained'} sx={styles.button} size={'large'}
									onClick={() => handleNextClick()}>Continue</Button>
						</Box>
					)}
					{activeStep === steps.length - 1 && (
						<Box sx={styles.buttonContainer}>
							<Button sx={styles.button} onClick={() => back()}><ArrowBack /> Back</Button>
							<Button variant={'contained'} sx={styles.button} size={'large'}
									onClick={() => handleNextClick()}>Create client</Button>
						</Box>
					)}
				</Box>
			</Modal>
		</>
	);
};

export default ClientModal;