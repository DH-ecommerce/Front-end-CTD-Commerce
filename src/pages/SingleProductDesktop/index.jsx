import { useState } from 'react';
import { Container, Col, Row, Button, Image } from 'react-bootstrap';
import './style.scss';

import api from '../../services/api';

function SingleProduct() {
  const [product, setProduct] = useState([]);

  const loadProduct = async () => {
    try {
      const response = await api.get('/products/5');
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  loadProduct();

  return (
    <Container className='my-5' as='section'>
      <Row className='p-0 m-0'>
        <Col md={2}>
          <Row>
            <Image
              src={product.image}
              alt=''
              style={{ maxHeight: '20vh', objectFit: 'contain' }}
            />
          </Row>
          <Row>
            <Image
              src={product.image}
              alt=''
              style={{ maxHeight: '20vh', objectFit: 'contain' }}
              className='my-3'
            />
          </Row>
          <Row>
            <Image
              src={product.image}
              alt=''
              style={{ maxHeight: '20vh', objectFit: 'contain' }}
              className='my-3'
            />
          </Row>
          <Row>
            <Image
              src={product.image}
              alt=''
              style={{ maxHeight: '20vh', objectFit: 'contain' }}
            />
          </Row>
        </Col>
        <Col md={6} className='mx-2 d-flex justify-content-center'>
          <Image
            src={product.image}
            alt=''
            style={{ objectFit: 'scale-down' }}
          />
        </Col>
        <Col className='d-grid'>
          <Container className='gap-5 p-0'>
            <Row>
              <Col>
                <p style={{ fontWeight: 'bold' }}>{product.title}</p>
              </Col>
            </Row>

            <Row>
              <Col>
                <p>{product.description}</p>
              </Col>
            </Row>
          </Container>
          <Row>
            <Col className='align-self-end'>
              <Button variant='primary' className='px-5 w-100'>
                Buy
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default SingleProduct;
