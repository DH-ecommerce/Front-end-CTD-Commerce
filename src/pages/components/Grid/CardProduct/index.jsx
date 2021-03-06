import './index.scss';
import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import { Card, Container } from 'react-bootstrap';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function CardProduct({ id, img, title, price, category }) {

  function radomReview() {
    return (Math.random() + 4).toFixed(1);
  }

  function numberReview(){
    return Math.floor(Math.random() * (50 - 20)) + 20;
  }

  return (

    <>
      <style type='text/css'>
        {`
        .no-style{
          text-decoration: none;
          color: black;          
        }
        .no-style:hover{
          color: #0cb876;          
        }
      `}
      </style>

      <Container className='h-100 p-0 m-0'>
        <Link className='no-style' to={`/products/product/${id}`}>
          <Card className='card-product'>
            <Card.Img
              src={img}
              variant='top'
              style={{
                maxHeight: '20vh',
                objectFit: 'contain',
                minHeight: '20vh',
              }}
            />
            <Card.Body>
              <Card.Subtitle className='mb-2 text-muted category-subtitle'>
                {category}
              </Card.Subtitle>
              <Card.Title>

                {title}

              </Card.Title>
              <Card.Subtitle className='mb-2 text-muted'>
                BRL {price}
              </Card.Subtitle>
            </Card.Body>
            <Card.Footer className='d-flex justify-content-between bg-white'>
              <div>
                <BsFillStarFill className='mb-1' style={{ color: 'gold' }} />
                <small className='text-muted'> {radomReview()}</small>
              </div>
              <div>
                <small className='text-muted'>
                  {numberReview()} Reviews
                  <BsThreeDotsVertical />{' '}
                </small>
              </div>
            </Card.Footer>
          </Card>
        </Link>
      </Container>
    </>
  );
}
