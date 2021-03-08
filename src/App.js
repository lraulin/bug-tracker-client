import Login from "components/Login";
import PrivateRoute from "components/PrivateRoute";
import Protected from "components/Protected";
import Public from "components/Public";
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { ProvideAuth } from "useAuth";
import AuthButton from "./components/AuthButton";

const App = () => {
  return (
    <ProvideAuth>
      <Router>
        <div>
          <AuthButton />

          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/public">
              <Public />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/protected">
              <Protected />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
};

export default App;
