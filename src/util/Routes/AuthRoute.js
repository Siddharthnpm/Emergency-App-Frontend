import React from "react";
import { Route } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

export default function AuthRoute(props) {
  const { element: Component, ...rest } = props;
  const { user } = useAuthContext();

  return (
    <Route
      {...rest}
      element={user ? <Component /> : <Navigate replace to="/" />}
    />
  );
}
