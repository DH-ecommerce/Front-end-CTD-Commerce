import { useEffect, useState } from 'react';
import { Container, Col, Row, Button, Image } from 'react-bootstrap';
import './style.scss';

import ImageMagnifier from '../components/ImageMagnifier';
import api from '../../services/api';

function SingleProduct() {
  const [product, setProduct] = useState([]);
  const [productImage, setProductImage] = useState([]);
  const [currentImage, setCurrentImage] = useState([]);

  const loadProduct = async () => {
    try {
      const response = await api.get('/products/8');
      setProduct(response.data);
      setProductImage(response.data.image.split('|'));
      setCurrentImage(response.data.image.split('|')[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    return loadProduct();
  }, []);

  const handleClick = (e) => {
    setCurrentImage(e.currentTarget.src);
  };

  return (
    <Container>
      <Container className='my-5 mx-0 px-0'>
        <Row>
          <Button variant='outline-success' className='button-back' style={{}}>
            {`< Back`}
          </Button>
        </Row>
        <Row className='my-5'>
          <h2>{product.title}</h2>
        </Row>
      </Container>
      <Container className='my-5 mx-0 p-0' as='section'>
        <Row className='p-0 mx-0'>
          <Col md={2}>
            {productImage.length !== 0 &&
              productImage.map((image, arr, idx) => {
                return (
                  <Row className='my-3'>
                    <Image
                      key={idx}
                      onClick={(e) => handleClick(e)}
                      className='hover-style'
                      src={image}
                      alt=''
                      style={{ maxHeight: '12vh', objectFit: 'contain' }}
                    />
                  </Row>
                );
              })}
          </Col>
          <Col md={6} className='mx-0 px-0 d-flex justify-content-center'>
            {productImage.length !== 0 && (
              <ImageMagnifier
                src={currentImage}
                height={'50vh'}
                className='zoom'
                style={{
                  objectFit: 'scale-down',
                  alignSelf: 'center',
                }}
              />
            )}
          </Col>
          <Col className='d-grid'>
            <Container className='gap-5 p-0'>
              {product.length !== 0 && (
                <>
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
                </>
              )}
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
    </Container>
  );
}

export default SingleProduct;
