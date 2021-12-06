import React from 'react';
import Card from 'react-bootstrap/Card'
import './style.scss';

export default function CategoryCard({ img, title}) {
    return (
      <>
        <Card>
          {<Card.Img src={img} />}
          <Card.Body>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
        </Card>
      </>
  
    )
  } 