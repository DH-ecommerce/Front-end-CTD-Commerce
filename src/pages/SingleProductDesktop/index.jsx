import { useEffect, useState } from 'react';
import { Container, Col, Row, Button, Image } from 'react-bootstrap';
import './style.scss';

import ImageMagnifier from '../components/ImageMagnifier';
import api from '../../services/api';

function SingleProduct() {
  const [product, setProduct] = useState([]);
  const [productImage, setProductImage] = useState([]);

  const loadProduct = async () => {
    try {
      const response = await api.get('/products/6');
      setProduct(response.data);
      console.log(response.data.image);
      setProductImage(response.data.image);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    return loadProduct();
  }, []);
  /*   loadProduct(); */

  const handleClick = (element) => {
    setProductImage(element.currentTarget.src);
  };

  const array = [
    product.image,
    'https://elgstore.vteximg.com.br/arquivos/ids/164667-290-290/MGDR_ELG_01.jpg?v=637453882918600000',
    'https://opiniaobomvaleapena.com.br/imagens/mouse-gamer-fortrek-raptor-om-801-preto-e-verde.png',
    product.image,
  ];

  return (
    <Container className='my-5' as='section'>
      <Row className='p-0 m-0'>
        <Col md={2}>
          {productImage.length !== 0 &&
            array.map((image) => {
              return (
                <Row className='my-3'>
                  <Image
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
              src={productImage}
              height={'50vh'}
              style={{
                objectFit: 'scale-down',
                alignSelf: 'center',
              }}
            />
          )}
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
