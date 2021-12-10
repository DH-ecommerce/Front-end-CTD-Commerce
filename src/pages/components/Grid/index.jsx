import api from '../../../services/api';
import CardProduct from './CardProduct';
import Filter from '../Filter';
import { useParams } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import React, { useState, useEffect, useCallback } from 'react';
import {Spinner} from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

const Loading = ()=>(
  <div className="loading-div">
    <Spinner className="spinner" variant="success" animation="border" role="status">
    </Spinner>
  </div>
)

export default function CardGrid() {
  const [products, setProducts] = useState();

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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (products) {
      setLoading(false)
    }
  }, [products])

  return (
    <>
      {loading
        ? <Loading />
        : <>
        <Helmet>
          <title>NeoTech | Product</title>
        </Helmet>
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
      }
    </>

  );
}
