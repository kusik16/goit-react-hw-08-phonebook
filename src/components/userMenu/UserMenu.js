import { useMemo, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';

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

import './userMenu.css';

const UserMenu = () => {
	const [createError, setCreateError] = useState(null);

	const { filter } = useSelector(state => state.contacts);
	const dispatch = useDispatch();
	let navigate = useNavigate();

	const [createContact] = useCreateContactMutation();
	const [deleteContact] = useDeleteContactMutation();
	const [logOut] = useLogOutMutation();
	const { data: contacts = [] } = useGetContactsQuery();

	const onLogOut = () => {
		logOut().then(() => {
			localStorage.removeItem('token');
			navigate('/login');
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
		<div style={{ margin: '0 auto', width: '100%', maxWidth: 500 }}>
			<div className="header">
				<div className="phonebook-title">Phonebook</div>
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
			</div>
			<ContactForm
				onAddContact={onAddContact}
				createError={createError}
			/>
			<div className="contacts-title">Contacts</div>
			<Filter onFilter={onFilter} />
			<ContactList
				filteredContacts={filteredContacts}
				onDeleteContact={onDeleteContact}
			/>
		</div>
	);
};

export default UserMenu;
