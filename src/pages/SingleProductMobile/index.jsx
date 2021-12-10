import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Container, Image, Tabs, Tab } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import api from '../../services/api';
import './style.scss';
import { Spinner } from 'react-bootstrap';
import ClientReview from '../components/ClientReview';
import Swal from 'sweetalert2';

const Loading = ()=>(
  <div className="loading-div">
    <Spinner variant="success" animation="border" role="status">
    </Spinner>
  </div>
)

function SingleProduct() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { singleProduct } = useParams();

  useEffect(() => {
    async function loadProductData() {
      try {
        const response = await api.get(`products/product/${singleProduct}`);

        setProduct({
          id: response.data.id,
          title: response.data.title,
          price: response.data.price,
          category: response.data.category.name,
          image: response.data.image,
          description: response.data.description,
          quantity: 1,
        });
      } catch (error) {
        console.log(error);
      }
    }
    loadProductData();
  }, [singleProduct]);

  useEffect(()=>{
    if(product){
      setLoading(false)
    }
  }, [product])

  let productsLocalStorage = localStorage.getItem('products');

  if (productsLocalStorage == null) {
    productsLocalStorage = [];
    localStorage.setItem('products', JSON.stringify(productsLocalStorage));
  } else {
    productsLocalStorage = JSON.parse(localStorage.getItem('products'));
  }

  let quantityLocalStorage = localStorage.getItem('quantityProducts');

  if (quantityLocalStorage == null) {
    quantityLocalStorage = [];
    localStorage.setItem('quantityProducts', JSON.stringify(quantityLocalStorage));
  } else {
    quantityLocalStorage = JSON.parse(localStorage.getItem('quantityProducts'));
  }



  const addProductToLocalStorage = () => {
    productsLocalStorage.push(product);
    quantityLocalStorage.push(1)
    localStorage.setItem('quantityProducts', JSON.stringify(quantityLocalStorage));
    localStorage.setItem('products', JSON.stringify(productsLocalStorage));

    Swal.fire({
      title: '<strong>Product added to shopping cart</strong>',
      icon: 'success',
      showCloseButton: true,
      showDenyButton: true,
      focusConfirm: false,
      confirmButtonColor: '#3085d6',
      confirmButtonText:
        "<i>Go to shopping cart</i>",
      denyButtonText:
        "<i>Keep buying</i>",
    }).then((result)=>{
      if (result.isConfirmed) {
        window.location.href = '/shoppingCart'; 
      } else if (result.isDenied) {
        window.location.href = '/products/filter/all'; 
      }
    })
  };

  const responsive = {
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2.2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.1,
    },
  };

  const arrImage = product?.image ? product?.image.split('|') : [];

  return (
    <> 
    {loading 
     ? <Loading/>
     : <>
      <Helmet>
        <title>{`NeoTech  | ${product?.title ? product.title : ''}`}</title>
      </Helmet>
      <Container className='container-single-product'>
        <h5 className='single-product-category mb-2'>{product.category}</h5>
        <h1 className='single-product-title mb-5'>{product.title}</h1>
        <h4 className='single-product-title mb-2'>BRL {product.price}</h4>

        <Container className='container-tabs'>
          <Tabs defaultActiveKey='overview' className='mb-3'>
            <Tab eventKey='overview' title='Overview'>
              <Container className='container-single-product-carousel'>
                <Carousel responsive={responsive}>
                  {arrImage.length !== 0 &&
                    arrImage.map((img, i) => {
                      return (
                        <div
                          key={i}
                          className='justify-content-center align-items-center single-product-image-div'
                        >
                          <Image
                            className='single-product-image'
                            src={img}
                            rounded
                            fluid
                          />
                        </div>
                      );
                    })}
                </Carousel>
              </Container>
            </Tab>
            <Tab eventKey='description' title='Description'>
              <Container className='container-single-product-carousel'>
                <div className='p-3 me-auto justify-content-center single-product-description-div'>
                  <p>{product.description}</p>
                </div>
              </Container>
            </Tab>
          </Tabs>
        </Container>
        <Container className='container-add-to-cart'>
          <Link style={{ textDecoration: 'none' }} to={`/shoppingCart`}>
            <Button variant='primary' onClick={addProductToLocalStorage}>
              Add to Cart
            </Button>
          </Link>
        </Container>
      </Container>
      <ClientReview/>
      </>
     }
   </>
  );
}



export default SingleProduct;
