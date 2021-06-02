import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Header.css";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="sm" className="navbar">
      <LinkContainer to="/">
        <Navbar.Brand>Pradžia</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/services">
            <Nav.Link>Paslaugos</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/products">
            <Nav.Link>Produktai</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/learn">
            <Nav.Link>Mokymai</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/reservation">
            <Nav.Link>Rezervacija</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contacts">
            <Nav.Link>Kontaktai</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
