import productList from '../components/Grid/assets/API';
import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import {Button, Container, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import api from '../../services/api'
import './style.scss'

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
        const response = await api.get(`products/${singleProduct}`);
        console.log(response.data)
        setProduct({
          id: response.data.id,
          title: response.data.title,
          price: response.data.price,
          category: response.data.category.name,
          image: response.data.image,
          description: response.data.description
        });
      } catch (error) {
          console.log(error)
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
      productsLocalStorage.push(product);
      localStorage.setItem("products", JSON.stringify(productsLocalStorage));
  }

const responsive = {
    // superLargeDesktop: {
    //   breakpoint: { max: 4000, min: 3000 },
    //   items: 6
    // },
    // desktop: {
    //   breakpoint: { max: 3000, min: 1024 },
    //   items: 6
    // },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2.2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.1

    }
  };

  const arrImage = [product.image, product.image,  product.image, product.image,]
  return (
    <>
      <Container d-flex className="mb-5 container-single-product-carousel">
        <Carousel responsive={responsive} className='ms-2'>
          {arrImage.map((img, i) => {
            return (
              <div className="me-2">
                  <Image key={i} src={img} rounded fluid link />
              </div>
            )
          })
          }
        </Carousel>
      </Container>
      <h1>{product.title}</h1>
      <h1>{product.category}</h1>
      <h1>{product.description}</h1>
      <Button onClick={addProductToLocalStorage}><Link productItem={product} to={`/shoppingCart`}>Adicionar ao Carrinho</Link></Button>
    </>
  );
     
}

export default SingleProduct;
