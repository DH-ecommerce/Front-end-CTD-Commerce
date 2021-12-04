import './style.scss';
import { Col, Card } from 'react-bootstrap';
import React from 'react';
import bin from '../../../assets/imgs/delete_outline_black_24dp.svg';
import add from '../../../assets/imgs/add_black_24dp.svg';
import remove from '../../../assets/imgs/remove_black_24dp.svg';

export default function CardCart({
  items,
  product,
  onAddItemCart,
  onRemoveItemCart,
}) {
  return (
    <Col sm={12}>
      <Card>
        <Card.Img className='card-image' variant='top' src={product.image[0]} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>USD {product.price}</Card.Text>
          <div className='btns-card-cart-div'>
            <div className='btn-quantity'>
              <button onClick={onRemoveItemCart.bind(null, product.id)}>
                <img src={remove} alt='' />
              </button>
              <p className='quantity-p'>{items[product.id]?.quantity || 0}</p>
              <button onClick={onAddItemCart.bind(null, product)}>
                <img src={add} alt='' />
              </button>
            </div>
            <img src={bin} alt='' />
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
