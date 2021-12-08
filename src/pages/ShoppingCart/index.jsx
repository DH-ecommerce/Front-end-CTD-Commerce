import React from 'react';
import CardCart from '../components/CardCart';
import List from '../components/List';
import Cart from '../components/Cart';
import './style.scss';
import { useState, useEffect } from 'react';

export default function ShoppingCart() {

  const productsLocalStorage = JSON.parse(localStorage.getItem('products'));

  const productListReduce =
    productsLocalStorage != null
      ? productsLocalStorage.reduce(
          (acc, { id, ...restProduct }) => ({
            ...acc,
            [id]: { id, ...restProduct },
          }),
          {}
        )
      : [];

  const [cartItemsList, setCartItemsList] = useState(productListReduce);

  const setItemCart = (product) => {
    !cartItemsList[product.id]
      ? setCartItemsList({
          ...cartItemsList,
          [product.id]: {
            ...product,
            quantity: 1,
          },
        })
      : setCartItemsList({
          ...cartItemsList,
          [product.id]: {
            ...product,
            quantity: ++cartItemsList[product.id].quantity,
          },
        });
  };

  const haveItemInCart = (product) => product?.quantity !== undefined;

  const itemInCartIsLOEOne = (product) => product?.quantity <= 1;

  function deleteItemAndUpdateCart(product) {
    delete cartItemsList[product.id];
    setCartItemsList({ ...cartItemsList });
  }

  function removeItemCart(productId) {
    if (haveItemInCart(cartItemsList[productId])) {
      itemInCartIsLOEOne(cartItemsList[productId])
        ? deleteItemAndUpdateCart(cartItemsList[productId])
        : setCartItemsList({
            ...cartItemsList,
            [productId]: {
              ...cartItemsList[productId],
              quantity: --cartItemsList[productId].quantity,
            },
          });
    }
  }

  const [cartItemsListEffect, setCartItemsListEffect] = useState();


  function deleteItem(product) {
    delete cartItemsList[product.id];
    localStorage.setItem(
      'products',
      JSON.stringify(productsLocalStorage.filter((p) => p.id !== product.id))
    );
    setCartItemsList({ ...cartItemsList });
  }

  useEffect(() => {
    function renderCartList() {
      setCartItemsListEffect(
        Object.values(cartItemsList).map((product, index) => (
          <CardCart
            product={product}
            onAddItemCart={setItemCart}
            onRemoveItemCart={removeItemCart}
            key={`product-${index}`}
            items={cartItemsList}
            onDeleteItem={deleteItem}
          />
        ))
      );
    }
    renderCartList();
  }, [cartItemsList]);
  return (
    <div className='shop-cart-container'>
      <List>{cartItemsListEffect}</List>
      
      <Cart items={cartItemsList}/>
    </div>
  );
}
