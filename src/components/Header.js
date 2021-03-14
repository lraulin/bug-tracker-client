import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useAuth } from "auth";

const Header = () => {
  const history = useHistory();
  const auth = useAuth();

  const handleClickLogout = () => auth.signout(() => history.push("/login"));

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="">Bug Tracker</Navbar.Brand>
      <Nav className="container-fluid">
        <Nav.Link as={NavLink} to="/projects">
          Projects
        </Nav.Link>
        <Nav.Link as={NavLink} to="/issues">
          Issues
        </Nav.Link>
        <Nav.Link as={NavLink} to="/new-project">
          + New Project
        </Nav.Link>
        {auth.user ? (
          <Nav.Link className="ml-auto" onClick={handleClickLogout}>
            Logout
          </Nav.Link>
        ) : (
          <Nav.Link className="ml-auto" as={NavLink} to="/login">
            Login
          </Nav.Link>
        )}
      </Nav>
    </Navbar>
  );
};

export default Header;
