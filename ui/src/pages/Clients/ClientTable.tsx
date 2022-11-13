import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ClientRow from './ClientRow';

const styles = {
	tableContainer: { maxWidth: '100%' },
	tableBody: {
		'& tr th': {
			fontWeight: 600,
			color: '#335fff',
		},
	},
	tableHead: {
		'& th': {
			fontWeight: 600,
		},
	},
};

export default function BasicTable({ clients }: { clients: IClient[] }) {
	return (
		<TableContainer component={Paper} sx={styles.tableContainer}>
			<Table sx={{ minWidth: 400 }} aria-label='simple table'>
				<TableHead>
					<TableRow sx={styles.tableHead}>
						<TableCell>Name</TableCell>
						<TableCell>Phone number</TableCell>
						<TableCell>Email</TableCell>
					</TableRow>
				</TableHead>
				<TableBody
					sx={styles.tableBody}
				>
					{clients.map((client) => (
						<ClientRow key={client.id} client={client} />
					))}
					{!clients ||
						(!clients.length && (
							<TableRow sx={{ padding: 3 }}>
								<TableCell component='th' scope='row'>
									No clients
								</TableCell>
							</TableRow>
						))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
