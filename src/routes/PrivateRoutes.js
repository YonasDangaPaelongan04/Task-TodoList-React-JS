import React, { Component, useContext } from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/Auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Navigate replace to="/" />
      }
    />
  );
};
// const PrivateRoute = () => {
//   const auth = null;

//   return auth ? <Outlet /> : <Navigate to="/Auth" />;
// };

export default PrivateRoute;
