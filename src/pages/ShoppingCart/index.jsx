import React, {useContext} from 'react';

import List from '../components/List';
import Cart from '../components/Cart';
import { Helmet } from 'react-helmet-async';
import './style.scss';
import { ItemsContext } from '../../hooks/ItemsProvider/ItemsProvider';

export default function ShoppingCart() {
  const {cartItemsListEffect} = useContext(ItemsContext);
  console.log(cartItemsListEffect)
  return (
    <>
          <Helmet>
            <title>NeoTech |Shopping Cart</title>
          </Helmet>
          <div className='shop-cart-container'>
            {(cartItemsListEffect !== undefined && cartItemsListEffect.length === 0)
            ? (<div className="cart-empty-div d-flex justify-content-center align-items-center flex-column">
                <p className="cart-empty-p">The shopping cart is empty.</p>
              </div>)
            : <List/> 
            }
            <Cart/>
          </div>
        </>
  );
}
