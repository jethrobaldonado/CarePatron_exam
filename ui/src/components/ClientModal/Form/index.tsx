import React from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { ArrowBack } from '@mui/icons-material';

const styles = {
	formControl: {
		marginTop: '2rem',
	},
	buttonContainer: {
		marginTop: '2rem',
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
	},
	button: {
		textTransform: 'none',
		fontWeight: 600,
		fontSize: '12px',
	},
};
const Form = () => {
	return (
		<>
			<Box>
				<TextField
					label='First name'
					type='text'
					InputLabelProps={{
						shrink: true,
					}}
					fullWidth={true}
					variant='outlined'
					sx={styles.formControl}
				/>
				<TextField
					label='Last name'
					type='text'
					InputLabelProps={{
						shrink: true,
					}}
					fullWidth={true}
					sx={styles.formControl}
					variant='outlined'
				/>
				<Box sx={{
					...styles.buttonContainer,
					justifyContent: 'end',
				}}>
					<Button variant={'contained'} sx={styles.button} size={'large'}>Continue</Button>
				</Box>
			</Box>
			<Box>
				<TextField
					label='Email'
					type='text'
					InputLabelProps={{
						shrink: true,
					}}
					fullWidth={true}
					variant='outlined'
					sx={styles.formControl}
				/>
				<TextField
					label='Phone number'
					type='text'
					InputLabelProps={{
						shrink: true,
					}}
					fullWidth={true}
					sx={styles.formControl}
					variant='outlined'
				/>
				<Box sx={styles.buttonContainer}>
					<Button sx={styles.button}><ArrowBack /> Back</Button>
					<Button variant={'contained'} sx={styles.button} size={'large'}>Create client</Button>
				</Box>
			</Box>
		</>
	);
};

export default Form;