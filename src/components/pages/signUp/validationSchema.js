import * as Yup from 'yup';

const validationSchema = Yup.object({
	firstName: Yup.string()
		.min(2, 'First Name should contain 2-60 characters')
		.max(60, 'First Name should contain 2-60 characters')
		.required('First Name is required'),
	lastName: Yup.string()
		.min(2, 'Last Name should contain 2-60 characters')
		.max(60, 'Last Name should contain 2-60 characters')
		.required('Last Name is required'),
	email: Yup.string().email('Invalid email').required('Email is required'),
	password: Yup.string()
		.required('No password provided.')
		.min(8, 'Password is too short - should be 8 chars minimum.'),
});

export default validationSchema;
