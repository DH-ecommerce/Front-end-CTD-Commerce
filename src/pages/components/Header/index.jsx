import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { CgShoppingCart } from 'react-icons/cg';
import logo from '../../../assets/logo.svg';
import './style.scss';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <Navbar expand='lg' className='my-3'>
        <Container className='gridNavbar'>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Brand href='index.html'>
            <img src={logo} alt='logo' style={{ width: '40px' }} /> NeoTech
          </Navbar.Brand>
          <Link to="/shoppingCart"><CgShoppingCart style={{ fontSize: '28px' }} className='gridItem' /></Link>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/team">Team</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
