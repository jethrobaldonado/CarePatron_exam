import React from 'react';
import CreateButton from './CreateButton/CreateButton';
import { Box, Modal, Typography } from '@mui/material';
import Steps from './Steps/Steps';
import Form from './Form';

const style = {
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
};

const ClientModal = () => {
	return (
		<>
			<CreateButton />
			<Modal open={true}>
				<Box sx={style}>
					<Typography id='modal-modal-title' variant='h6' component='h2'>
						Create new client
					</Typography>
          <Steps />
          <Form />
				</Box>
			</Modal>
		</>
	);
};

export default ClientModal;