import React from 'react';
import { Col, Container, ListGroup } from 'react-bootstrap';
import logo from '../../../assets/logo.svg';
import { Link } from 'react-router-dom';
import './style.scss';

export default function Footer({ company }) {
  const generateDateString = () => {
    const creationYear = '2020';
    const currentYear = `${new Date().getFullYear()}`;
    return creationYear === currentYear
      ? currentYear
      : `${creationYear} - ${currentYear}`;
  };
  return (
    <Container className='my-5 text-center' as='footer'>
      <Col md={{ span: 6, offset: 3 }} sm={{ span: 10, offset: 1 }}>
        <ListGroup as='ul' horizontal className='justify-content-center'>
          <ListGroup.Item as='li' className='nav-item'>
            <Link to='/' className='nav-link px-2 text-muted'>
              Home
            </Link>
          </ListGroup.Item>
          <ListGroup.Item as='li' className='nav-item'>
            <Link to='/products' className='nav-link px-2 text-muted'>
              Products
            </Link>
          </ListGroup.Item>
          <ListGroup.Item as='li' className='nav-item'>
            <Link to='/team' className='nav-link px-2 text-muted'>
              Team
            </Link>
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <p className='text-center text-muted'>
        <img src={logo} alt='logo' style={{ width: '20px' }} /> {company} &copy;
        Copyright {generateDateString()}
      </p>
    </Container>
  );
}
