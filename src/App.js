import Login from "components/Login";
import PrivateRoute from "components/PrivateRoute";
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { ProvideAuth } from "auth";
import AuthButton from "components/AuthButton";
import Header from "components/Header";
import "bootswatch/dist/cyborg/bootstrap.min.css";
import "App.css";
import Projects from "components/Projects";
import Issues from "components/Issues";
import NewProject from "components/NewProject";

const App = () => {
  return (
    <ProvideAuth>
      <Router>
        <div>
          <Header></Header>

          <Switch>
            <PrivateRoute path="/projects">
              <Projects />
            </PrivateRoute>
            <PrivateRoute path="/issues">
              <Issues />
            </PrivateRoute>
            <PrivateRoute path="/new-project">
              <NewProject />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
};

export default App;
