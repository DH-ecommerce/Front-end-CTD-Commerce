import React from 'react';
import CardCart from '../../pages/components/CardCart';
import { useState, useEffect, createContext } from 'react';

export const ItemsContext = createContext({});

export default function ItemsProvider({children}) {
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
      let productsLocalStorage = JSON.parse(localStorage.getItem('products'));
      productsLocalStorage.push(product);
      localStorage.setItem('products', JSON.stringify(productsLocalStorage));
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
    
    let productsLocalStorage = JSON.parse(localStorage.getItem('products'));
    let arrIndex = productsLocalStorage.reduceRight((acc, crr, i)=>{
        if(crr.id === productId){
          acc.push(i)
        }
        return acc;
      }, [])
    productsLocalStorage.splice(arrIndex[0], 1);
    localStorage.setItem('products', JSON.stringify(productsLocalStorage));
   
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
        )) || []
      );
    }
    renderCartList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItemsList]);
  return (
      <ItemsContext.Provider value={{setCartItemsListEffect, cartItemsListEffect, cartItemsList, setItemCart, deleteItem, removeItemCart, deleteItemAndUpdateCart}}>
           {children}
      </ItemsContext.Provider>
  );
}
