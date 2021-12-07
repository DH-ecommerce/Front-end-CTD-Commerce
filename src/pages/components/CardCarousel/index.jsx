import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container } from 'react-bootstrap';
import productList from '../Grid/assets/API';
import OneCard from './Card';
import { Link } from 'react-router-dom';
import "./style.scss";

export default function CardCarousel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5.5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4.5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3.5
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
  return (
    <>
      <Container>
        <div className="clearfix my-4">
          <h4 className='float-start ms-2'>Featured products</h4>
          <Link className='see-all float-end me-2' to="/products">see all</Link>
        </div>
        <Carousel responsive={responsive}>
          {productList.map(({ id, img, title, price, category }) => {
            return (
              <div className="mx-2">
                <OneCard key ={id} img={img} title={title} price={price} category={category} />
              </div>
            )
          })
          }
        </Carousel>
      </Container>
    </>
  )
}