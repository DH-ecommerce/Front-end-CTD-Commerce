import './index.scss';
import React from 'react';
import { BsFillStarFill } from "react-icons/bs"
import { Card, Container, CardGroup } from 'react-bootstrap'
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from 'react-router-dom';


export default function CardProduct({ id, img, title, price, category }) {

  return (
    <>
      <style type="text/css">
        {`
        .no-style{
          text-decoration: none;
          color: black;
        }
      `}
      </style>

      <Container className='h-100 p-0 m-0' >
        <Card >
          <Link className='no-style' to={`/products/${id}`}>
            <Card.Img src={img} variant="top" style={{ maxHeight: '20vh', objectFit: 'contain', minHeight: '20vh' }} />
          </Link>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted category-subtitle">{category}</Card.Subtitle>
            <Card.Title><Link className='no-style' to={`/products/${id}`}>{title}</Link></Card.Title>
            <Card.Subtitle className="mb-2 text-muted">USD {price}</Card.Subtitle>
          </Card.Body>
          <Link className="no-style" to={`/products/${id}`}>
            <Card.Footer className="d-flex justify-content-between bg-white" >
              <div>
                <BsFillStarFill className='mb-1' style={{ color: 'gold' }} /><small className="text-muted"> 4.7</small>
              </div>
              <div>
                <small className="text-muted">38 Reviews<BsThreeDotsVertical /> </small>
              </div>
            </Card.Footer>
          </Link>
        </Card>
      </Container>
    </>
  )
}