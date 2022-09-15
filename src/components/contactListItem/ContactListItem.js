import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

const ContactListItem = ({ id, name, number, onDeleteContact }) => {
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
			<ListItemText primary={name} secondary={number} />
		</ListItem>
	);
};

export default ContactListItem;

ContactListItem.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	number: PropTypes.string.isRequired,
	onDeleteContact: PropTypes.func.isRequired,
};
