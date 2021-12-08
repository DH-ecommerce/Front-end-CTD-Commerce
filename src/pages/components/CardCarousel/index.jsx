/* eslint-disable no-unused-expressions */
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OneCard from './Card';
import "./style.scss";
import { useState, useEffect, useCallback } from 'react';
import api from '../../../services/api';

export default function CardCarousel() {

  const [ products, setProducts ] = useState([])

  const sortNumber = () => {
    const arrayNumberId = []
    while(arrayNumberId.length <= 12) {
      const number = Math.floor(Math.random() * 13)
      if(!arrayNumberId.includes(number) && number !== 0) {
        arrayNumberId.push(number)
      }
    }
    console.log('arrayNumberId', arrayNumberId);
    return arrayNumberId;
  }

  const consumingAPI = async (arr) => {
    const asyncMap = await arr.map( async (number) => {
        try {
          const response = await api.get(`/products/product/${number}`)
          console.log('response', response.data)
          setProducts([...products, {
            id: response.data.id,
            title: response.data.title,
            price: response.data.price,
            category: response.data.category,
            image: response.data.image
          }])
        } catch (e) {
          console.log(e)
        }
      })
      console.log(products)
    }

   useEffect(() => {
     return consumingAPI(sortNumber());
   }, [])
  
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5.5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4.5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3.5
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
  
  return (
    <>
      <Container>
        <div className="clearfix my-4">
          <h4 className='float-start ms-2'>Featured products</h4>
          <Link className='see-all float-end me-2' to="/products">see all</Link>
        </div>
        <Carousel responsive={responsive}>
          {products.map(({ id, img, title, price, category }) => {
            return (
              <div className="mx-2">
                <OneCard key={id} img={img} title={title} price={price} category={category} />
              </div>
            )
          })
          }
        </Carousel>
      </Container>
    </>
  )
}