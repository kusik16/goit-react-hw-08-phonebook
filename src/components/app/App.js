import { lazy, Suspense } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';

import ProtectedRoute from 'components/protectedRoute/ProtectedRoute';

const SignIn = lazy(() => import('../pages/signIn/SignIn'));
const SignUp = lazy(() => import('../pages/signUp/SignUp'));
const UserMenu = lazy(() => import('../pages/userMenu/UserMenu'));

const App = () => {
	return (
		<Router basename="/goit-react-hw-08-phonebook/">
			<main>
				<Suspense>
					<Routes>
						<Route path="/*" element={<Navigate to="contacts" />} />
						<Route path="login" element={<SignIn />} />
						<Route path="register" element={<SignUp />} />
						<Route
							path="contacts"
							element={
								<ProtectedRoute>
									<UserMenu />
								</ProtectedRoute>
							}
						></Route>
					</Routes>
				</Suspense>
			</main>
		</Router>
	);
};

export default App;
