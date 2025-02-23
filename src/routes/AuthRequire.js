import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import useAuth from '../hooks/useAuth';
import LoadingScreen from '../components/LoadingScreen';

// how about admin login
// stay login if refresh
function AuthRequire({ children, requiredRole }) {
  const { isInitialized, isAuthenticated, user } = useAuth();
  const location = useLocation(); // user dang muon vao

  if (!isInitialized) {
    return <LoadingScreen />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Check if the user's role matches the required role
  if (requiredRole && user?.roles !== requiredRole) {
    return <Navigate to="/not-authorized" replace />; // Redirect to a 'Not Authorized' page if role doesn't match
  }

  return children;
}

export default AuthRequire;
