import React from "react";

import { UseAuth } from "../context/AuthContext";

import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({ children }) => {
  const { user } = UseAuth();

  if (!user) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};
