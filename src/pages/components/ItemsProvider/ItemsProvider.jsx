import React from 'react';
import CardCart from '../CardCart'
import { useState, useEffect, createContext } from 'react';
import { Spinner } from 'react-bootstrap';

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
      let quantityLocalStorage = localStorage.getItem('quantityProducts');

      if (quantityLocalStorage == null) {
        quantityLocalStorage = [];
        localStorage.setItem('quantityProducts', JSON.stringify(quantityLocalStorage));
      } else {
        quantityLocalStorage = JSON.parse(localStorage.getItem('quantityProducts'));
      }
      quantityLocalStorage.push(1)
      localStorage.setItem('quantityProducts', JSON.stringify(quantityLocalStorage));
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

    const quantityLocalStorage = JSON.parse(localStorage.getItem('quantityProducts'));
    quantityLocalStorage.pop()
    localStorage.setItem('quantityProducts', JSON.stringify(quantityLocalStorage)); 
   
  }

  const [cartItemsListEffect, setCartItemsListEffect] = useState();

  function deleteItem(product) {
    
    const quantityLocalStorage = JSON.parse(localStorage.getItem('quantityProducts'));

    for(let i = 0; i <= cartItemsList[product.id].quantity; i++){
      quantityLocalStorage.pop()
      localStorage.setItem('quantityProducts', JSON.stringify(quantityLocalStorage));
    }

    delete cartItemsList[product.id];
    localStorage.setItem(
      'products',
      JSON.stringify(productsLocalStorage.filter((p) => p.id !== product.id))
    );
    
    setCartItemsList({ ...cartItemsList });
    
  }

  const Loading = () => (
    <div className="loading-div">
      <Spinner variant="success" animation="border" role="status">
      </Spinner>
    </div>
  )

  const [loading, setLoading] = useState(true);
  useEffect(() => {

    const isLoading = setTimeout(() => { setLoading(false) }, 500);
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

    return () => {
      clearTimeout(isLoading);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItemsList]);
  return (
      <ItemsContext.Provider value={{cartItemsListEffect, cartItemsList}}>
           {children}
      </ItemsContext.Provider>
  );
}
