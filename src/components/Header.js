import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="">Bug Tracker</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} to="/projects">
          Projects
        </Nav.Link>
        <Nav.Link as={NavLink} to="/issues">
          Issues
        </Nav.Link>
        <Nav.Link as={NavLink} to="/new-project">
          + New Project
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
