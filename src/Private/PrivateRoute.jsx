import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({ children }) => {
  const userLogged = useSelector((state) => state.bookedseats.userLogged);
  return userLogged ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
 