import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignIn from 'components/signIn/SignIn';
import SignUp from 'components/signUp/SignUp';
import UserMenu from 'components/userMenu/UserMenu';
import ProtectedRoute from 'components/protectedRoute/ProtectedRoute';

const App = () => {
	return (
		<Router>
			<div className="app">
				<main>
					<Routes>
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
				</main>
			</div>
		</Router>
	);
};

export default App;
