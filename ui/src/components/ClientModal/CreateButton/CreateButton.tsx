import React, { FunctionComponent } from 'react';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';

export interface ICreateButtonProps {
    onClick: () => void;
}

const CreateButton: FunctionComponent<ICreateButtonProps> = ({ onClick }) => {

	return (
		<Box sx={{
			display: 'flex',
			justifyContent: 'end',
			width: '50%',
		}}>
			<Button variant='contained'
        onClick={() => onClick()}
					sx={{
						background: '#335fff',
						fontSize: '12px',
						textTransform: 'none',
						fontWeight: 600,
						height: '40px',
						width: '60%',
					}}>Create new client</Button>
		</Box>
	);
};

export default CreateButton;