import * as Yup from 'yup';

const phoneRegExp = /^\d+$/;

const validationSchema = Yup.object({
	name: Yup.string()
		.min(2, 'Name should contain 2-60 characters')
		.max(60, 'Name should contain 2-60 characters')
		.required('Name is required'),
	number: Yup.string()
		.matches(phoneRegExp, 'Number should be valid')
		.required('Number is required'),
});

export default validationSchema;
