import React from 'react';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import styles from './form.styles';
import { IClientForm } from './PersonalDetailsForm';

const ContactDetailsForm = ({ data, onChange, errors }: IClientForm) => {

	return (
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
        onChange={(event) => onChange('email', event.target.value)}
        defaultValue={data.email}
        error={!!errors['email']}
        helperText={errors['email']}
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
        onChange={(event) => onChange('phoneNumber', event.target.value)}
        defaultValue={data.phoneNumber}
        error={!!errors['phoneNumber']}
        helperText={errors['phoneNumber']}
			/>
		</Box>
	);
};

export default ContactDetailsForm;