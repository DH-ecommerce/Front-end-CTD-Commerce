import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container } from 'react-bootstrap';
import productList from '../Grid/assets/API';
import CategoryCard from './CategoryCard';
import { Link } from 'react-router-dom';


export default function CategoriesCarousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6.5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6.5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5.5
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };

  return (
    <>
      <Container>
        <div className="clearfix my-4">
          <h4 className='float-start ms-2'>Categories</h4>
        </div>
        <Carousel responsive={responsive}>
          {productList.map(({ id, img, title, price, category }) => {
            return (
              <div className="mx-2">
                <CategoryCard img={img} title={title} price={price} category={category} />
              </div>
            )
          })
          }
        </Carousel>
      </Container>
    </>
  )
}