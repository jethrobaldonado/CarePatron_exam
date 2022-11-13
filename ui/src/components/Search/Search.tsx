import React, { useContext, useEffect, useState } from 'react';
import { InputAdornment, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import { StateContext } from '../../store/DataProvider';

export default function Search() {
	const { state, dispatch } = useContext(StateContext);
	const [search, setSearch] = useState('');

	useEffect(() => {
		dispatch({ type: 'SEARCH_CLIENT', data: search});
	}, [search]);

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
				onChange={(event) => setSearch(event.target.value)}
			/>
		</Box>
	);
}
