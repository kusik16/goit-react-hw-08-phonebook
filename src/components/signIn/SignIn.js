import { useState } from 'react';
import { Link as ReactLink, useNavigate } from 'react-router-dom';
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

import { useSignInMutation } from '../../api/apiSlice';
import validationSchema from './validationSchema';

const theme = createTheme();

export default function SignIn() {
	const [signIn] = useSignInMutation();
	const [regError, setRegError] = useState(null);
	let navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema,
		onSubmit: ({ email, password }) => {
			onSignIn({
				email,
				password,
			});
		},
	});

	const onSignIn = logObject => {
		const { email, password } = logObject;

		const logInfo = {
			email,
			password,
		};

		signIn(logInfo)
			.unwrap()
			.then(res => localStorage.setItem('token', res.token))
			.then(() => navigate('/contacts'))
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
						Sign in
					</Typography>
					<Box
						component="form"
						onSubmit={formik.handleSubmit}
						sx={{ mt: 1 }}
					>
						<TextField
							margin="normal"
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
							value={formik.values.email}
							onChange={formik.handleChange}
							error={Boolean(formik.errors.email)}
							helperText={formik.errors.email}
						/>
						<TextField
							margin="normal"
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							value={formik.values.password}
							onChange={formik.handleChange}
							error={Boolean(formik.errors.password)}
							helperText={formik.errors.password}
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
							disabled={!(formik.isValid && formik.dirty)}
						>
							Sign In
						</Button>
						<Grid container>
							<Grid item>
								<ReactLink to="/goit-react-hw-08-phonebook/register">
									{"Don't have an account? Sign Up"}
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
