import './style.scss';
import { Col, Card, Button } from 'react-bootstrap';
import React from 'react';
import bin from '../../../assets/imgs/delete_outline_black_24dp.svg';
import add from '../../../assets/imgs/add_black_24dp.svg';
import remove from '../../../assets/imgs/remove_black_24dp.svg';

export default function CardCart({
  items,
  product,
  onAddItemCart,
  onRemoveItemCart,
  onDeleteItem,
}) {
  return (
    <Col sm={12}>
      <Card className='card_card'>
        <Card.Img className='card_image' variant='top' src={product.image} />
        <Card.Body className='card_body'>
          <Card.Title className='card_title'>{product.title}</Card.Title>
          <Card.Text className='card_text'>USD {product.price}</Card.Text>
          <div className='btns-card-cart-div'>
            <div className='btn-quantity'>
              <button className="btns-quantity" onClick={onRemoveItemCart.bind(null, product.id)}>
                <img src={remove} alt='' />
              </button>
              <p className='quantity-p'>{items[product.id]?.quantity || 1}</p>
              <button className="btns-quantity" onClick={onAddItemCart.bind(null, product)}>
                <img src={add} alt='' />
              </button>
            </div>
            <button className="bin-btn" onClick={onDeleteItem.bind(null, product)}><img  className="bin-image" src={bin} alt='' /></button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
