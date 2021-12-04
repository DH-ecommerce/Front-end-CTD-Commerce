import React from 'react';
import { Col, Container, ListGroup } from 'react-bootstrap';
import logo from '../../../assets/logo.svg';

export default function Footer({ company }) {
  const generateDateString = () => {
    const creationYear = '2020';
    const currentYear = `${new Date().getFullYear()}`;
    return creationYear === currentYear
      ? currentYear
      : `${creationYear} - ${currentYear}`;
  };
  return (
    <Container className='my-5 text-center'>
      <Col md={{ span: 6, offset: 3 }} sm={{ span: 10, offset: 1 }}>
        <ListGroup as='ul' horizontal className='justify-content-center'>
          <ListGroup.Item as='li' className='nav-item'>
            <a href='index.html' className='nav-link px-2 text-muted'>
              Home
            </a>
          </ListGroup.Item>
          <ListGroup.Item as='li' className='nav-item'>
            <a href='index.html' className='nav-link px-2 text-muted'>
              Products
            </a>
          </ListGroup.Item>
          <ListGroup.Item as='li' className='nav-item'>
            <a href='index.html' className='nav-link px-2 text-muted'>
              Team
            </a>
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
