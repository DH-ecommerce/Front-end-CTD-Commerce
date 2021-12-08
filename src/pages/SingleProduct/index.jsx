import productList from '../components/Grid/assets/API';
import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import api from '../../services/api'

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
        const response = await api.get(`products/product/${singleProduct}`);
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
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

  return (
    <>
      <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  // autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  // deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Carousel>;
      <h1>{product.title}</h1>
      <h1>{product.category}</h1>
      <h1>{product.description}</h1>
      <Button onClick={addProductToLocalStorage}><Link productItem={product} to={`/shoppingCart`}>Adicionar ao Carrinho</Link></Button>
    </>
  );
}

export default SingleProduct;
