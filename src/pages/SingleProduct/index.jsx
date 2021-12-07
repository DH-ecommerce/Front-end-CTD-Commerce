import productList from '../components/Grid/assets/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'

const productListReduce = productList.reduce((acc, {id, ...restProduct})=>({
  ...acc,
  [id]: {id, ...restProduct} 
}), {})


function SingleProduct() {

  const [product, setProduct] = useState({});
  const { singleProduct } = useParams();

  useEffect(() => {
    async function loadProductData() {
      try {
        const productResponse = productListReduce[singleProduct];
        setProduct(productResponse);
      } catch (error) {
        Swal.fire({
          title: error,
          icon: 'error',
          text: error
        })
      }
    }
    loadProductData();
  }, [singleProduct]);


  let productsLocalStorage = localStorage.getItem("products");

  if(productsLocalStorage == null){
    productsLocalStorage = []
    localStorage.setItem("products", JSON.stringify(productsLocalStorage));
  } else {
    productsLocalStorage = JSON.parse(localStorage.getItem("products"))
  }
  

  const addProductToLocalStorage = () => {
      productsLocalStorage.push(productListReduce[singleProduct]);
      localStorage.setItem("products", JSON.stringify(productsLocalStorage));
  }

  return (
    <>
      <h1>{product.title}</h1>
      <h1>{product.category}</h1>
      <Button onClick={addProductToLocalStorage}><Link productItem={productListReduce[singleProduct]} to={`/shoppingCart`}>Adicionar ao Carrinho</Link></Button>
    </>
  );
}

export default SingleProduct;
