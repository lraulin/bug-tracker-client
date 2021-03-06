import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "auth";

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  console.log("Private Route");
  console.log(auth);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
