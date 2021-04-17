import React from "react";
import { Nav } from "react-bootstrap";

function Navbar() {
  return (
    <Nav className="justify-content-center" activeKey="/searchbooks">
    <Nav.Item>
      <Nav.Link href="#/searchbooks">Search Books</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="#/savedbooks">Saved Books</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item>
  </Nav>
  );
}

export default Navbar;
