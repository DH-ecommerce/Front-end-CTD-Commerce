import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { CgShoppingCart } from 'react-icons/cg';

export default function Header() {
  return (
    <>
      <Navbar expand='lg'>
        <Container>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Brand href='#home'>NeoTech</Navbar.Brand>
          <CgShoppingCart style={{ fontSize: '28px' }} />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#link'>Products</Nav.Link>
              <Nav.Link href='#team'>Team</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
