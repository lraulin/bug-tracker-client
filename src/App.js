import React, { createContext, useContext, useState } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
  useLocation,
} from "react-router-dom";
import "bootswatch/dist/cyborg/bootstrap.min.css";
import "./App.css";
import Header from "components/Header";
import Login from "components/Login";
import Public from "components/Public";
import Protected from "components/Protected";
import useProvideAuth from "useProvideAuth";

const AuthContext = createContext(null);

function App() {
  const auth = useProvideAuth();
  const location = useLocation();
  return (
    <div className="App">
      <AuthContext.Provider value={useProvideAuth()}>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" exact component={Public} />
            {auth.user ? (
              <Route path="/protected" component={Protected} />
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location },
                }}
              />
            )}
          </Switch>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
