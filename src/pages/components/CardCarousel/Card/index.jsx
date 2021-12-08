import React from 'react';
import Card from 'react-bootstrap/Card'
import './style.scss';

export default function OneCard({ image, title, price, category }) {
  
  return (
    <>
      <Card>
        {<Card.Img src={image} />}
        <Card.Body>
          <Card.Subtitle className="mb-2">{category}</Card.Subtitle>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">BRL {price}</Card.Subtitle>
        </Card.Body>
      </Card>
    </>

  )
}