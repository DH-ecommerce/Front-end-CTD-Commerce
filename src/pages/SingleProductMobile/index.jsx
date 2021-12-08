import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Container, Image, Tabs, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import api from '../../services/api';
import './style.scss';

function SingleProduct() {
  const [product, setProduct] = useState({});

  const { singleProduct } = useParams();

  useEffect(() => {
    async function loadProductData() {
      try {
        const response = await api.get(`products/product/${singleProduct}`);
        console.log(response.data);

        setProduct({
          id: response.data.id,
          title: response.data.title,
          price: response.data.price,
          category: response.data.category.name,
          image: response.data.image,
          description: response.data.description,
          quantity: 1
        });
      } catch (error) {
        console.log(error);
      }
    }
    loadProductData();
  }, [singleProduct]);

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

  const responsive = {
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2.2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.1,
    },
  };

  const arrImage = product.image ? product.image.split('|') : [];

  return (
    <>
      <Container className='container-single-product'>
        <h5 className='single-product-category mb-2'>{product.category}</h5>
        <h1 className='single-product-title mb-5'>{product.title}</h1>

        <Container className='container-tabs'>
          <Tabs defaultActiveKey='overview' className='mb-3'>
            <Tab eventKey='overview' title='Overview'>
              <Container className='container-single-product-carousel'>
                <Carousel responsive={responsive}>
                  {arrImage.length !== 0 && arrImage.map((img, i) => {
                    return (
                      <div
                        key={i}
                        className='justify-content-center align-items-center single-product-image-div'
                      >
                        <Image
                          className='single-product-image'
                          src={img}
                          rounded
                          fluid
                        />
                      </div>
                    );
                  })}
                </Carousel>
              </Container>
            </Tab>
            <Tab eventKey='description' title='Description'>
              <Container className='container-single-product-carousel'>
                <div className='p-3 me-auto justify-content-center single-product-description-div'>
                  <p>{product.description}</p>
                </div>
              </Container>
            </Tab>
          </Tabs>
        </Container>
        <Container className='container-add-to-cart'>
          <Link style={{ textDecoration: 'none' }} to={`/shoppingCart`}>
            <Button variant='primary' onClick={addProductToLocalStorage}>
              Add to Cart
            </Button>
          </Link>
        </Container>
      </Container>
    </>
  );
}

export default SingleProduct;
