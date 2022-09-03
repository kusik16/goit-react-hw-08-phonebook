import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import validationSchema from './validationSchema';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';

import './contactForm.css';

const ContactForm = ({ onAddContact, createError }) => {
	const formik = useFormik({
		initialValues: {
			name: '',
			number: '',
		},
		validationSchema,
		onSubmit: ({ name, number }) => {
			onAddContact(name, number);
		},
	});

	return (
		<Box
			onSubmit={formik.handleSubmit}
			component="form"
			sx={{
				width: '100%',
				maxWidth: 500,
				backgroundColor: '#f0f0f0',
				borderRadius: '5px',
				marginBottom: '25px',
			}}
			noValidate
			autoComplete="off"
		>
			<TextField
				sx={{
					width: '100%',
				}}
				id="name"
				label="Name"
				variant="filled"
				value={formik.values.name}
				onChange={formik.handleChange}
				error={Boolean(formik.errors.name)}
				helperText={formik.errors.name}
			/>
			<TextField
				sx={{
					width: '100%',
				}}
				id="number"
				label="Number"
				variant="filled"
				value={formik.values.number}
				onChange={formik.handleChange}
				error={Boolean(formik.errors.number)}
				helperText={formik.errors.number}
			/>
			<Button
				type="submit"
				disabled={!(formik.isValid && formik.dirty)}
				sx={{
					margin: '0 auto',
					marginTop: '10px',
					width: '100%',
				}}
				variant="contained"
				startIcon={<AddIcon />}
			>
				Add contact
			</Button>
			{createError ? <div className="error">{createError}</div> : null}
		</Box>
	);
};

export default ContactForm;

ContactForm.propTypes = {
	onAddContact: PropTypes.func.isRequired,
};
