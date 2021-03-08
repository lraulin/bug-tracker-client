import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} to="/">
          Public
        </Nav.Link>
        <Nav.Link as={NavLink} to="/Protected">
          Protected
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
