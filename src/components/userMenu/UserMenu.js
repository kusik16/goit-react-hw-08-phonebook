import { useMemo, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import ContactForm from '../contactForm/ContactForm';
import Filter from '../filter/Filter';
import ContactList from '../contactList/ContactList';

import { setFilter } from '../filter/contactsSlice';
import {
	useCreateContactMutation,
	useDeleteContactMutation,
	useGetContactsQuery,
	useLogOutMutation,
} from '../../api/apiSlice';

const UserMenu = () => {
	const [createError, setCreateError] = useState('');

	const { filter } = useSelector(state => state.contacts);
	const dispatch = useDispatch();
	let navigate = useNavigate();

	const [createContact] = useCreateContactMutation();
	const [deleteContact] = useDeleteContactMutation();
	const [logOut] = useLogOutMutation();
	const { data: contacts = [] } = useGetContactsQuery();

	const onLogOut = () => {
		navigate('/goit-react-hw-08-phonebook/login');
		logOut().then(() => {
			localStorage.removeItem('token');
		});
	};

	const onFilter = e => {
		dispatch(setFilter(e.target.value));
	};

	const onAddContact = (name, number) => {
		if (contacts.filter(contact => contact.name === name).length >= 1) {
			alert(`${name} is already in contacts`);
			return;
		}

		if (contacts.filter(contact => contact.number === number).length >= 1) {
			alert(`${number} is already in contacts`);
			return;
		}

		const newUser = {
			name,
			number,
			id: nanoid(),
		};

		createContact(newUser)
			.unwrap()
			.catch(e => setCreateError(e.data.message));
	};

	const onDeleteContact = useCallback(id => {
		deleteContact(id);
		// eslint-disable-next-line
	}, []);

	const filteredContacts = useMemo(() => {
		const filteredContacts = contacts.slice();

		if (!filter) {
			return filteredContacts;
		} else {
			return filteredContacts.filter(
				contact =>
					contact.name.toLowerCase().includes(filter.toLowerCase()) ||
					(contact.number + '').includes(filter)
			);
		}
	}, [contacts, filter]);

	return (
		<Box sx={{ margin: '0 auto', width: '100%', maxWidth: 500 }}>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					marginBottom: '15px',
					alignItems: 'flex-end',
				}}
			>
				<Box
					sx={{
						fontSize: '35px',
					}}
				>
					Phonebook
				</Box>
				<Button
					onClick={onLogOut}
					sx={{
						margin: '0',
					}}
					color="error"
					variant="outlined"
					endIcon={<LogoutIcon />}
				>
					Logout
				</Button>
			</Box>
			<ContactForm
				onAddContact={onAddContact}
				createError={createError}
			/>
			<Box
				sx={{
					fontSize: '35px',
					marginBottom: '10px',
				}}
			>
				Contacts
			</Box>
			<Filter onFilter={onFilter} />
			<ContactList
				filteredContacts={filteredContacts}
				onDeleteContact={onDeleteContact}
			/>
		</Box>
	);
};

export default UserMenu;
