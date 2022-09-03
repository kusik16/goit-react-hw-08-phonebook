import { useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { useFormik } from 'formik';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useSignUpMutation } from '../../api/apiSlice';
import validationSchema from './validationSchema';

const theme = createTheme();

export default function SignUp() {
	const [signUp] = useSignUpMutation();
	const [regError, setRegError] = useState(null);

	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
		},
		validationSchema,
		onSubmit: ({ firstName, lastName, email, password }) => {
			onSignUp({
				firstName,
				lastName,
				email,
				password,
			});
		},
	});

	const onSignUp = regObject => {
		setRegError('');
		const { firstName, lastName, email, password } = regObject;

		const regInfo = {
			name: `${firstName} ${lastName}`,
			email,
			password,
		};

		console.log(regInfo);

		signUp(regInfo)
			.unwrap()
			.then(res => localStorage.setItem('token', res.token))
			.catch(e => {
				if (e.status === 400) {
					setRegError('Invalid signup data');
				} else {
					setRegError('Something went wrong...');
				}
			});
	};

	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign up
					</Typography>
					<Box
						component={'form'}
						sx={{ mt: 3 }}
						onSubmit={formik.handleSubmit}
					>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									fullWidth
									name="firstName"
									id="firstName"
									label="First Name"
									autoFocus
									value={formik.values.firstName}
									onChange={formik.handleChange}
									error={Boolean(formik.errors.firstName)}
									helperText={formik.errors.firstName}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									fullWidth
									id="lastName"
									label="Last Name"
									name="lastName"
									autoFocus
									value={formik.values.lastName}
									onChange={formik.handleChange}
									error={Boolean(formik.errors.lastName)}
									helperText={formik.errors.lastName}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									autoComplete="email"
									value={formik.values.email}
									onChange={formik.handleChange}
									error={Boolean(formik.errors.email)}
									helperText={formik.errors.email}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="password"
									autoComplete="new-password"
									value={formik.values.password}
									onChange={formik.handleChange}
									error={Boolean(formik.errors.password)}
									helperText={formik.errors.password}
								/>
							</Grid>
						</Grid>
						<Button
							disabled={!(formik.isValid && formik.dirty)}
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Sign Up
						</Button>
						<Grid container justifyContent="flex-end">
							<Grid item>
								<ReactLink to="/goit-react-hw-08-phonebook/login">
									Already have an account? Sign in
								</ReactLink>
							</Grid>
						</Grid>
					</Box>
				</Box>
				{regError ? <div>{regError}</div> : null}
			</Container>
		</ThemeProvider>
	);
}
