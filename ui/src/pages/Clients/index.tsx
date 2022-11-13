import { memo, useContext, useEffect } from 'react';
import { Paper, Typography } from '@mui/material';
import { StateContext } from '../../store/DataProvider';
import Page from '../../components/Page';
import ClientTable from './ClientTable';
import { getClients } from '../../services/api';
import Search from '../../components/Search/Search';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ClientModal from '../../components/ClientModal';

function Clients() {
	const { state, dispatch } = useContext(StateContext);
	const { clients } = state;

	useEffect(() => {
		getClients().then((clients) =>
			dispatch({ type: 'FETCH_ALL_CLIENTS', data: clients }),
		);
	}, [dispatch]);

	return (
		<Page>
			<Typography variant='h4' sx={{ textAlign: 'start' }}>
				Clients
			</Typography>
			<Box sx={{
				display: 'flex',
				marginTop: '15px',
			}}>
				<Search />
        <ClientModal />
			</Box>
			<Paper sx={{ margin: 'auto', marginTop: 3 }}>
				<ClientTable clients={clients} />
			</Paper>
		</Page>
	);
}

export default memo(Clients);
