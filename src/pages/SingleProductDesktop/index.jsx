import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Col, Row, Button, Image } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import './style.scss';

import ImageMagnifier from '../components/ImageMagnifier';
import api from '../../services/api';

function SingleProductDesktop() {
  const [product, setProduct] = useState({});
  const [currentImage, setCurrentImage] = useState([]);

  const { singleProduct } = useParams();
  /* 
  const loadProduct = async () => {
    try {
      const response = await api.get(`/products/product/${SingleProduct}`);
      await setProduct({
        id: response.data.id,
        title: response.data.title,
        price: response.data.price,
        category: response.data.category.name,
        image: response.data.image.split('|'),
        description: response.data.description,
      });
      await setCurrentImage(response.data.image.split('|')[0]);
    } catch (error) {
      console.log(error);
    }
  };
 */
  useEffect(() => {
    async function loadProductData() {
      try {
        const response = await api.get(`/products/product/${singleProduct}`);
        setProduct({
          id: response.data.id,
          title: response.data.title,
          price: response.data.price,
          category: response.data.category.name,
          image: response.data.image,
          description: response.data.description,
        });
        setCurrentImage(response.data.image.split('|')[0]);
      } catch (error) {
        console.log(error);
      }
    }
    loadProductData();
  }, [singleProduct]);

  const handleClick = (e) => {
    setCurrentImage(e.currentTarget.src);
  };

  let productsLocalStorage = localStorage.getItem('products');

  if (productsLocalStorage == null) {
    productsLocalStorage = [];
    localStorage.setItem('products', JSON.stringify(productsLocalStorage));
  } else {
    productsLocalStorage = JSON.parse(localStorage.getItem('products'));
  }

  const addProductToLocalStorage = () => {
    productsLocalStorage.push(product);
    localStorage.setItem('products', JSON.stringify(productsLocalStorage));
  };

  const arrImage = product.image ? product.image.split('|') : [];

  return (
    <>
      <Helmet>
        <title>{`Product | ${product.title}`}</title>
      </Helmet>
      <Container>
        <Container className='my-5 mx-0 px-0'>
          <Row>
            <Link to={'/products/filter/all'}>
              <Button
                variant='outline-success'
                className='button-back'
                style={{}}
              >
                {`< Back`}
              </Button>
            </Link>
          </Row>
          <Row className='my-5'>
            <h2>{product.title}</h2>
          </Row>
        </Container>
        <Container className='my-5 mx-0 p-0' as='section'>
          <Row className='p-0 mx-0'>
            <Col md={2}>
              {arrImage.length !== 0 &&
                arrImage.map((image, arr, idx) => {
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
              {currentImage.length !== 0 && (
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
                  <Link to={`/shoppingCart`} style={{ textDecoration: 'none' }}>
                    <Button
                      variant='primary'
                      className='px-5 w-100'
                      onClick={addProductToLocalStorage}
                    >
                      Add to Cart
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default SingleProductDesktop;
