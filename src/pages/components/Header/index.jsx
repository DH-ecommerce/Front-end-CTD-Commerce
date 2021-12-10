import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { CgShoppingCart } from 'react-icons/cg';
import logo from '../../../assets/logo.svg';
import './style.scss';
import { LinkContainer } from 'react-router-bootstrap';

export default function Header() {
  return (
    <>
      <Navbar expand='lg' className='nav-bg'>
        <Container className='gridNavbar'>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <LinkContainer to='/'>
            <Navbar.Brand href='index.html'>
              <img src={logo} alt='logo' style={{ width: '40px' }} /> NeoTech
            </Navbar.Brand>
          </LinkContainer>
          <LinkContainer
            to='/shoppingCart'
            style={{ fontSize: '28px', cursor: 'pointer' }}
          >
            <CgShoppingCart className='gridItem' />
          </LinkContainer>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto' as='ul'>
              <LinkContainer to='/'>
                <Nav.Link as='li'>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/products/filter/all'>
                <Nav.Link as='li'>Products</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/team'>
                <Nav.Link as='li'>Team</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
