import React from 'react';
import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ children }) => {
  const { isAuth } = useSelector(({ login: { isAuth } }) => ({
    isAuth
  }))
  return isAuth ? children : <Navigate to="/" />
}
