import React, { useCallback, useState } from 'react';
import CreateButton from './CreateButton/CreateButton';
import { Box, Modal, Typography } from '@mui/material';
import Steps from './Steps/Steps';
import Form from './Form';
import { Close } from '@mui/icons-material';
import Button from '@mui/material/Button';

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
					<Steps />
					<Form />
				</Box>
			</Modal>
		</>
	);
};

export default ClientModal;