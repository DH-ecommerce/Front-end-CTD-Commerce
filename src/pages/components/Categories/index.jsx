import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import imagesList from './images';
import './style.scss'

export default function CategoriesCarousel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4.5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2.5,
    },
  };

  return (
    <>
      <Container className='mb-5'>
        <div className='clearfix my-4'>
          <h4 className='float-start ms-2'>Categories</h4>
        </div>
        <Carousel responsive={responsive} className='ms-2'>
          {imagesList.map(({ id, name, image }, idx) => {
            return (
              <div className='me-2 category-div' key={idx}>
                <Link to={`/products/filter/${name}`}>
                  <Image key={id} src={image} rounded fluid />
                </Link>
              </div>
            );
          })}
        </Carousel>
      </Container>
    </>
  );
}
