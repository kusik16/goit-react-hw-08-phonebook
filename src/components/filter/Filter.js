import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

import './filter.css';

const Filter = ({ onFilter }) => {
	return (
		<>
			<div className="filter__title">Find contacts by name</div>
			{/* <input onChange={e => onFilter(e)} type="text" name="filter" /> */}
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
