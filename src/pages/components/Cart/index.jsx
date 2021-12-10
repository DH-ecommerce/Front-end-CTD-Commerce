import './style.scss';
import { Row, Col, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { ItemsContext } from '../ItemsProvider/ItemsProvider';
import {useContext} from 'react'

const totalPrice = (cartItems) =>
    Object.keys(cartItems).reduce(
    (acc, productId) =>
      acc += cartItems[productId].price * cartItems[productId].quantity,
    0
    )

const totalQuantity = (cartItems) =>

    Object.keys(cartItems).reduce(
      (acc, productId) => acc += cartItems[productId].quantity,
      0
    )

const onCheckout = () => Swal.fire({
  position: 'top',
  icon: 'success',
  title: 'Completed purchase',
  showConfirmButton: false,
  timer: 1500
})

export default function Cart() {

  const {cartItemsList} = useContext(ItemsContext)

  return (
    <>
    <Row className='cart__total'>
      <Col xs={6}>
        <h6 className='total-quantity-h6'>
          Total: {totalQuantity(cartItemsList)}{' '}
          {totalQuantity(cartItemsList) < 2 ? 'item' : 'items'}
        </h6>
      </Col>
      <Col xs={6}>
        <h6 className='total-price-h6'>
          <strong>USD {totalPrice(cartItemsList).toFixed(2)}</strong>
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
          text-align: center;        
        }


        `}
      </style>
      <Button onClick={onCheckout} className="btn-checkout" variant="primary">
        <span> Checkout </span>
      </Button>
      </Col>
    </Row>
    
    </>
  );
}
