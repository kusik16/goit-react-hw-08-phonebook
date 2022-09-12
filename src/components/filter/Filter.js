import PropTypes from 'prop-types';

import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';

const Filter = ({ onFilter }) => {
	return (
		<>
			<Box
				sx={{
					marginBottom: '10px',
				}}
			>
				Find contacts by name
			</Box>
			<TextField
				sx={{
					margin: '0 auto',
					marginBottom: '10px',
					width: '100%',
					maxWidth: 500,
					bgcolor: '#f0f0f0',
				}}
				onChange={e => onFilter(e)}
				fullWidth
				label={<SearchIcon />}
				id="fullWidth"
			/>
		</>
	);
};

export default Filter;

Filter.propTypes = {
	onFilter: PropTypes.func.isRequired,
};
