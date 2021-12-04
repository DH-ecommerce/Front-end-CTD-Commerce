import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { CgShoppingCart } from 'react-icons/cg';
import logo from '../../../assets/logo.svg';
import './style.scss';

export default function Header() {
  return (
    <>
      <Navbar expand='lg' className='my-3'>
        <Container className='gridNavbar'>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Brand href='#home'>
            <img src={logo} alt='logo' style={{ width: '40px' }} /> NeoTech
          </Navbar.Brand>
          <CgShoppingCart style={{ fontSize: '28px' }} className='gridItem' />
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
