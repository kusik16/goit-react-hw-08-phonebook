import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import List from '@mui/material/List';

import ContactListItem from 'components/contactListItem/ContactListItem';

const ContactList = ({ filteredContacts, onDeleteContact }) => {
	return (
		<Box
			sx={{
				margin: '0 auto',
				marginBottom: '50px',
				width: '100%',
				maxWidth: 500,
				bgcolor: '#f0f0f0',
				borderRadius: '5px',
			}}
		>
			<List>
				{filteredContacts.length > 0 ? (
					filteredContacts.map(({ id, name, number }) => {
						return (
							<ContactListItem
								key={id}
								id={id}
								name={name}
								number={number}
								onDeleteContact={onDeleteContact}
							/>
						);
					})
				) : (
					<Box
						sx={{
							marginLeft: '15px',
						}}
					>
						No results
					</Box>
				)}
			</List>
		</Box>
	);
};

export default ContactList;

ContactList.propTypes = {
	filteredContacts: PropTypes.array.isRequired,
	onDeleteContact: PropTypes.func.isRequired,
};
