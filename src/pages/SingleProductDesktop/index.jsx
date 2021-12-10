import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Col, Row, Button, Image } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import './style.scss';
import Swal from 'sweetalert2';
import ImageMagnifier from '../components/ImageMagnifier';
import api from '../../services/api';
import { Spinner } from 'react-bootstrap';
import ClientReview from '../components/ClientReview';
const Loading = ()=>(
  <div className="loading-div">
    <Spinner className="spinner" variant="success" animation="border" role="status">
    </Spinner>
  </div>
)

function SingleProductDesktop() {

  const [product, setProduct] = useState(null);
  const [currentImage, setCurrentImage] = useState([]);

  const { singleProduct } = useParams();

  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function loadProductData() {
      try {
        const response = await api.get(`/products/product/${singleProduct}`);
        setProduct({
          id: response.data.id,
          title: response.data.title,
          price: response.data.price,
          category: response.data.category.name,
          image: response.data.image,
          description: response.data.description,
          quantity: 1,
        });
        setCurrentImage(response.data.image.split('|')[0]);
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


  const handleClick = (e) => {
    setCurrentImage(e.currentTarget.src);
  };

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
    // window.location.href = '/shoppingCart'; 
    // <Link to={`/shoppingCart`} style={{ textDecoration: 'none' }}></Link>
    
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
     <Container>
       <Container className='my-5 mx-0 px-0'>
         <Row>
           <Link to={'/products/filter/all'}>
             <Button
               variant='outline-success'
               className='button-back'
               style={{}}
             >
               {`< Back`}
             </Button>
           </Link>
         </Row>
         <Row className='my-5'>
           <h2>{product.title}</h2>
         </Row>
       </Container>
       <Container className='my-5 mx-0 p-0' as='section'>
         <Row className='p-0 mx-0'>
           <Col md={2}>
             {arrImage.length !== 0 &&
               arrImage.map((image, idx) => {
                 return (
                   <Row className='my-3' key={idx}>
                     <Image
                       onClick={(e) => handleClick(e)}
                       className='hover-style'
                       src={image}
                       alt=''
                       style={{ maxHeight: '12vh', objectFit: 'contain' }}
                     />
                   </Row>
                 );
               })}
           </Col>
           <Col md={6} className='mx-0 px-0 d-flex justify-content-center'>
             {currentImage.length !== 0 && (
               <ImageMagnifier
                 src={currentImage}
                 height={'50vh'}
                 className='zoom'
                 style={{
                   objectFit: 'scale-down',
                   alignSelf: 'center',
                 }}
               />
             )}
           </Col>
           <Col className='d-grid'>
             <Container className='gap-5 p-0'>
               {product.length !== 0 && (
                 <>
                   <Row>
                     <Col>
                       <p style={{ fontWeight: 'bold' }}>{product.title}</p>
                     </Col>
                   </Row>

                   <Row>
                     <Col>
                       <p>{product.description}</p>
                     </Col>
                   </Row>
                 </>
               )}
             </Container>

             <Col className='align-self-end mt-5'>
               <h4>BRL {product.price}</h4>
             </Col>
             <Row>
               <Col className='align-self-end'>
                 {/* <Link to={`/shoppingCart`} style={{ textDecoration: 'none' }}> */}
                   <Button
                     variant='primary'
                     className='px-5 w-100 m-0'
                     onClick={addProductToLocalStorage}
                   >
                     Add to Cart
                   </Button>
                 {/* </Link> */}
               </Col>
             </Row>
           </Col>
         </Row>
       </Container>
     </Container>
     <ClientReview/>
   </>
     }
   </>
    
  );
}

export default SingleProductDesktop;
