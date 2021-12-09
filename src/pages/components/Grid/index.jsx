import './index.scss';
import api from '../../../services/api';
import CardProduct from './CardProduct';
import Filter from '../Filter';
import { useParams } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import React, { useState, useEffect, useCallback } from 'react';

export default function CardGrid() {
  const [products, setProducts] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const [filterInfo, setFilterInfo] = useState({ url: '/products/filter/all' });
  const { filtered } = useParams();

  const callbackFilterInfo = (filterInfo) => {
    setFilterInfo({ url: '/products/filter/' + filterInfo });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const gridProducts = useCallback(async () => {
    try {
      const response = await api.get('/products/filter/' + filtered);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    return gridProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtered]);

  return (
    <>
      <Filter parentCallback={callbackFilterInfo} />
      <Container className='justify-content-center align-items-center pt-5 pb-5'>
        <Row xs={1} md={2} className='g-4'>
          {products.map((product, idx) => {
            return (
              <Col md={3} sm={4} xs={6} key={idx}>
                <CardProduct
                  product={product}
                  id={product.id}
                  key={product.id}
                  img={product.image}
                  title={product.title}
                  price={product.price}
                  category={product.category.name}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
