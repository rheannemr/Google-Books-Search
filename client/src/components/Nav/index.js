import React from "react";
import { Nav } from "react-bootstrap";

function Navbar() {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/home" className="navbar">
    <Nav.Item>
      <Nav.Link href="#/home">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="#/searchbooks">Search Books</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="#/savedbooks">Save Books</Nav.Link>
    </Nav.Item>
  </Nav>
  );
}

export default Navbar;
