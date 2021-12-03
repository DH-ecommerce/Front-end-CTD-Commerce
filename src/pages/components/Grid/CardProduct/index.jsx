import './index.scss';
import React from 'react';
import Card from 'react-bootstrap/Card'

export default function CardProduct({ img, title, price, category}) {
    return (
      <>
      
        <Card>
          {<Card.Img src={img} />}
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">BRL {price}</Card.Subtitle>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{} 4.7</small>
            <small className="text-muted">  </small>
            <small className="text-muted">  </small>
            <small className="text-muted">38 Reviews</small>
          </Card.Footer>
        </Card>
      </>
  
    )
  } 