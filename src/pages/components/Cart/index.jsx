import './style.scss';
import { Row, Col, Button } from 'react-bootstrap';


const totalPrice = (cartItems) =>
  Object.keys(cartItems).reduce(
    (acc, productId) =>
      acc + cartItems[productId].price * cartItems[productId].quantity,
    0
  );

const totalQuantity = (cartItems) =>
  Object.keys(cartItems).reduce(
    (acc, productId) => acc + cartItems[productId].quantity,
    0
  );

export default function Cart({ items }) {

  <style>

  </style>
  return (
    <>
    <Row className='cart__total'>
      <Col xs={6}>
        <h6 className='total-quantity-h6'>
          Total: {totalQuantity(items)}{' '}
          {totalQuantity(items) < 2 ? 'item' : 'items'}
        </h6>
      </Col>
      <Col xs={6}>
        <h6 className='total-price-h6'>
          <strong>USD {totalPrice(items).toFixed(2)}</strong>
        </h6>
      </Col>
      <Col className="btn-col" xs={{span: 10, offset: 1 }} md={{span: 7, offset: 5}}>
      <style type="text/css">
        {`

        .btn-primary {
          background-color: #0ACF83;
          color: white;
          width: 100%;
          max-width: 326px;
          border-radius: 10px;
          padding: 1rem 0;
          font-family: DM Sans;
          font-size: 14px;
          font-style: normal;
          font-weight: 700;
          line-height: 20px;
          letter-spacing: 0.20000000298023224px;
          text-align: left;
          display: flex;
          justify-content: space-around;
          margin: 1rem 0 3rem 0;
        
        }


        `}
      </style>
      <Button className="btn-checkout" variant="primary">
        <span> Proceed to Checkout </span>
        <span> > </span>
      </Button>
      </Col>
    </Row>
    
    </>
  );
}
