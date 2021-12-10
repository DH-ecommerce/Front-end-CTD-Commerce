import React,{useContext} from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { CgShoppingCart } from 'react-icons/cg';
import logo from '../../../assets/logo.svg';
import './style.scss';
import { LinkContainer } from 'react-router-bootstrap';
import { ItemsContext } from '../../../hooks/ItemsProvider/ItemsProvider';

export default function Header() {
  const {cartItemsList} = useContext(ItemsContext)

  return (
    <>
      <Navbar expand='lg' className='my-3'>
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
          <div className="cart-image-div gridItem">
              <CgShoppingCart  />
              
                    {Object.keys(cartItemsList).reduce(
                    (acc, productId) => acc += cartItemsList[productId].quantity, 0) === 0 
                    ? <p></p>
                    : <p className="count-items-cart">{Object.keys(cartItemsList).reduce(
                      (acc, productId) => acc += cartItemsList[productId].quantity, 0)}</p>
                  }
          </div>
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
