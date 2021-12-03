import "./style.scss";
import {Row, Col} from 'react-bootstrap';

const totalPrice = cartItems => 
  Object.keys(cartItems).reduce((acc, productId) =>
    acc + (cartItems[productId].price * cartItems[productId].quantity), 0);

const totalQuantity = cartItems => 
  Object.keys(cartItems).reduce((acc, productId) =>
    acc + cartItems[productId].quantity, 0);

export default function Cart({items}) {
  return (
  <Row className="cart__total">
    <Col xs={6}><h6 className="total-quantity-h6">Total: {totalQuantity(items)} {totalQuantity(items) < 2 ? "item" : "items"}</h6></Col>
    <Col xs={6}><h6 className="total-price-h6"><strong>USD {totalPrice(items).toFixed(2)}</strong></h6></Col>
  </Row>
  )
}
