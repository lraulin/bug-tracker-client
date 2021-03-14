import Login from "components/Login";
import PrivateRoute from "components/PrivateRoute";
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  Redirect,
} from "react-router-dom";
import { ProvideAuth } from "auth";
import Header from "components/Header";
import "bootswatch/dist/cyborg/bootstrap.min.css";
import "App.css";
import Projects from "components/Projects";
import Issues from "components/Issues";
import NewProject from "components/NewProject";
import Home from "components/Home";

const App = () => {
  return (
    <ProvideAuth>
      <Router>
        <div>
          <Header></Header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
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
