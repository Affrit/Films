import React from 'react';
import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { authSelector } from './selector';

export const PrivateRoute = ({ children }) => {
  const { isAuth } = useSelector(authSelector)
  return isAuth ? children : <Navigate to="/" />
}
