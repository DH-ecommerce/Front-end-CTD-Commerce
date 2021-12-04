import './index.scss';
import React from 'react';
import { BsFillStarFill } from "react-icons/bs"
import Card from 'react-bootstrap/Card'
import { BsThreeDotsVertical } from "react-icons/bs";


export default function CardProduct({ img, title, price, category }) {
  return (
    <>
    
      <Card >

        {<Card.Img  src={img} />}
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">BRL {price}</Card.Subtitle>
        </Card.Body>

        <Card.Footer className="d-flex justify-content-between bg-white" >
          <div>
            <BsFillStarFill className='mb-1' style={{ color: 'gold' }} /><small className="text-muted"> 4.7</small>
          </div>

          <div>
            <small className="text-muted">38 Reviews<BsThreeDotsVertical /> </small>
          </div>
        </Card.Footer>
      </Card>
    </>

  )
}