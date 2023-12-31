import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ loggedIn, component: Component, ...props }) => {
  return (
    <Route>
      {
        loggedIn ? <Component {...props} /> : <Redirect to="/sign-up" />
      }
    </Route>
  )
}


