/* eslint-disable no-unused-expressions */
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container } from 'react-bootstrap';
import OneCard from './Card';
import { Link } from 'react-router-dom';
import './style.scss';
import api from '../../../services/api';
import { useState, useEffect } from 'react';

export default function CardCarousel() {
  const [products, setProducts] = useState([]);

  const arrayProducts = async () => {
    try {
      const response = await api.get('/products/filter/all');
      setProducts([...response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const sortNumber = () => {
    const arrayNumberId = [];
    while (arrayNumberId.length <= 11) {
      const number = Math.floor(Math.random() * 37);
      if (!arrayNumberId.includes(number)) {
        arrayNumberId.push(number);
      }
    }
    return arrayNumberId;
  };

  useEffect(() => {
    return arrayProducts();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5.5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4.5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3.5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <>
      <Container className='mt-2'>
        <div className='clearfix mt-4'>
          <h4 className='float-start ms-2'>Featured products</h4>
          <Link className='see-all float-end me-2' to='/products/filter/all'>
            see all
          </Link>
        </div>
        <Carousel responsive={responsive}>
          {!!products &&
            sortNumber().map((productIdSorted, idx) => {
              return (
                <div className='mx-2' key={idx}>
                  <Link
                    className='no-style mx-4'
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    to={`/products/product/${products[productIdSorted]?.id}`}
                  >
                    <OneCard
                      key={products[productIdSorted]?.id}
                      image={products[productIdSorted]?.image}
                      title={products[productIdSorted]?.title}
                      price={products[productIdSorted]?.price}
                      category={products[productIdSorted]?.category?.name}
                    />
                  </Link>
                </div>
              );
            })}
        </Carousel>
      </Container>
    </>
  );
}
