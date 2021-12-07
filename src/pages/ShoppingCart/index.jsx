import React from 'react';
import { listProducts } from '../../assets/data/data.js';
import CardCart from '../components/CardCart';
import List from '../components/List';
import Cart from '../components/Cart';
import {Container, Button} from 'react-bootstrap';
import "./style.scss"
import {useState, useEffect} from 'react'

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState({});

  const setItemCart = (product) => {
    !cartItems[product.id]
      ? setCartItems({
          ...cartItems,
          [product.id]: {
            ...product,
            quantity: 1,
          },
        })
      : setCartItems({
          ...cartItems,
          [product.id]: {
            ...product,
            quantity: ++cartItems[product.id].quantity,
          },
        });
  };

  const haveItemInCart = (product) => product?.quantity !== undefined;

  const itemInCartIsLOEOne = (product) => product?.quantity <= 1;

  function deleteItemAndUpdateCart(product) {
    delete cartItems[product.id];
    setCartItems({ ...cartItems });
  }

  function removeItemCart(productId) {
    if (haveItemInCart(cartItems[productId])) {
      itemInCartIsLOEOne(cartItems[productId])
        ? deleteItemAndUpdateCart(cartItems[productId])
        : setCartItems({
            ...cartItems,
            [productId]: {
              ...cartItems[productId],
              quantity: --cartItems[productId].quantity,
            },
          });
    }
  }

  const productsLocalStorage = JSON.parse(localStorage.getItem("products"));

  const productListReduce = productsLocalStorage != null ? productsLocalStorage.reduce((acc, {id, ...restProduct})=>({
    ...acc,
    [id]: {id, ...restProduct} 
  }), {}) : [];

  const [cartItemsList, setCartItemsList] = useState(productListReduce);
  const [cartItemsListEffect, setCartItemsListEffect] = useState();

  function deleteItem (product) {
    delete cartItemsList[product.id]
    localStorage.setItem("products", JSON.stringify(productsLocalStorage.filter(p=>p.id !== product.id)))
    setCartItemsList({ ...cartItemsList })
  }

  useEffect(() => {
    function renderCartList(){

      setCartItemsListEffect(
          Object.values(cartItemsList).map((product, index) => (
            <CardCart
              product={product}
              onAddItemCart={setItemCart}
              onRemoveItemCart={removeItemCart}
              key={`product-${index}`}
              items={cartItems}
              onDeleteItem={deleteItem}
            />
          ))
        );
    }
    renderCartList();
  }, [cartItemsList, cartItems]);
 
  return (
    <div className="shop-cart-container">
      <List>
        {cartItemsListEffect}
      </List>
      <Cart items={cartItems} />  
    </div>
  );
}