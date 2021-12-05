import React from 'react';
import { listProducts } from '../../assets/data/data.js';
import CardCart from '../components/CardCart';
import List from '../components/List';
import Cart from '../components/Cart';

export default function ShoppingCart() {
  const [cartItems, setCartItems] = React.useState({});

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
  return (
    <>
      <List>
        {listProducts.map((product, index) => (
          <CardCart
            product={product}
            onAddItemCart={setItemCart}
            onRemoveItemCart={removeItemCart}
            key={`product-${index}`}
            items={cartItems}
          />
        ))}
      </List>
      <Cart items={cartItems} />
      {/* <button className="btn-checkout">Proceed to Checkout</button> */}
    </>
  );
}