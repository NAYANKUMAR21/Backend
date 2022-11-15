import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const PrivateROute = ({ children }) => {
  const Auth = useSelector((state) => state);
  return Auth.islogged ? children : <Navigate to="/" />;
};

export default PrivateROute;
