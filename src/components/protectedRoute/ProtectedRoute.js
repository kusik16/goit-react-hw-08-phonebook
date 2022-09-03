import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children }) => {
	const isAuthenticated = localStorage.getItem('token');
	if (!isAuthenticated) {
		return <Navigate to="/login" replace />;
	}

	return children;
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
	children: PropTypes.node.isRequired,
};
