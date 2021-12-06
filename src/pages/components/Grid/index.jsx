import './index.scss';
import { Container, Col, Row } from 'react-bootstrap';
import CardProduct from './CardProduct';
import productList from '../Grid/assets/API';
import api from '../../../services/api'
import React, { useState, useEffect } from 'react'


export default function CardGrid() {

  const [ products, setProducts ] = useState([]);

  const gridProducts = async () => {
    try {
      const response = await api.get('/products/all');
      setProducts(response.data);
      console.log(response.data)

    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    return gridProducts();
  }, [])
  
  


  return (
    <>
      <Container className='justify-content-center align-items-center pt-5 pb-5 '>
        <Row xs={1} md={2} className='g-4'>
          {productList.map(({ id, img, title, price, category }) => {
            return (
              <Col md={3} sm={4} xs={6}>
                <CardProduct
                  key={id}
                  img={img}
                  title={title}
                  price={price}
                  category={category}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
