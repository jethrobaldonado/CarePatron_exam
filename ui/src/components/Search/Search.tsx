import React from 'react';
import { InputAdornment, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';

export default function Search() {
	return (
		<Box sx={{
			display: 'flex',
			justifyContent: 'start',
			width: '50%',
		}}>
			<OutlinedInput
				sx={{
					width: '80%',
					height: '40px',
					background: '#fff',
					fontSize: '12px',
				}}
				endAdornment={(
					<InputAdornment position='end'>
						<SearchIcon />
					</InputAdornment>
				)}
				placeholder={'Search clients...'}
			/>
		</Box>

	);
}
