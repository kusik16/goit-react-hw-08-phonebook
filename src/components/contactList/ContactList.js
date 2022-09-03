import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

import './contactList.css';

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
							<ListItem
								key={id}
								secondaryAction={
									<IconButton
										onClick={() => onDeleteContact(id)}
										edge="end"
										aria-label="delete"
									>
										<DeleteIcon />
									</IconButton>
								}
							>
								<ListItemAvatar>
									<Avatar />
								</ListItemAvatar>
								<ListItemText
									primary={name}
									secondary={number}
								/>
							</ListItem>
						);
					})
				) : (
					<div className='no-items'>No results</div>
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
