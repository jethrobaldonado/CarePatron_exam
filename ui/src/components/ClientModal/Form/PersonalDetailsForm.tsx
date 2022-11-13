import React from 'react';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';

import styles from './form.styles';

export interface IClientForm {
	data: IClient;
	onChange: (name: string, value: string) => void;
	errors: any;
}

const PersonalDetailsForm = ({
  data, onChange, errors
}: IClientForm) => {
	return (
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
				onChange={(event) => onChange('firstName', event.target.value)}
				defaultValue={data.firstName}
        error={!!errors['firstName']}
        helperText={errors['firstName']}
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
				onChange={(event) => onChange('lastName', event.target.value)}
				defaultValue={data.lastName}
        error={!!errors['lastName']}
        helperText={errors['lastName']}
			/>

		</Box>
	);
};

export default PersonalDetailsForm;