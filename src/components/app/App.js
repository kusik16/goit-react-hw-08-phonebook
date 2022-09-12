import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';

import SignIn from 'components/signIn/SignIn';
import SignUp from 'components/signUp/SignUp';
import UserMenu from 'components/userMenu/UserMenu';
import ProtectedRoute from 'components/protectedRoute/ProtectedRoute';

const App = () => {
	return (
		<Router>
			<div>
				<main>
					<Routes>
						<Route
							path="/goit-react-hw-08-phonebook/*"
							element={
								<Navigate to="/goit-react-hw-08-phonebook/contacts" />
							}
						/>
						<Route
							path="/goit-react-hw-08-phonebook/login"
							element={<SignIn />}
						/>
						<Route
							path="/goit-react-hw-08-phonebook/register"
							element={<SignUp />}
						/>
						<Route
							path="/goit-react-hw-08-phonebook/contacts"
							element={
								<ProtectedRoute>
									<UserMenu />
								</ProtectedRoute>
							}
						></Route>
					</Routes>
				</main>
			</div>
		</Router>
	);
};

export default App;
