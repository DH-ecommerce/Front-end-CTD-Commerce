import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Image } from 'react-bootstrap';
import hardware from '../../../assets/categories/hardware.png';
import headset from '../../../assets/categories/headset.png';
import keyboard from '../../../assets/categories/keyboards.png';
import laptop from '../../../assets/categories/laptops.png';
import monitors from '../../../assets/categories/monitors.png';
import mouse from '../../../assets/categories/mouses.png';



export default function CategoriesCarousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4.5
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2.5
    }
  };

  return (
    <>
      <Container>
        <div className="clearfix my-4">
          <h4 className='float-start ms-2'>Categories</h4>
        </div>
        <Carousel responsive={responsive} className='ms-2'>
          <div className="me-2">
          <Image src={hardware} rounded fluid/>
          </div>
          <div className="me-2">
          <Image src={headset} rounded fluid/>
          </div>
          <div className="me-2">
          <Image src={keyboard} rounded fluid/>
          </div>
          <div className="me-2">
          <Image src={laptop} rounded fluid/>
          </div>
          <div className="me-2">
          <Image src={monitors} rounded fluid/>
          </div>
          <div className="me-2">
          <Image src={mouse} rounded fluid/>
          </div>
        </Carousel>
      </Container>
    </>
  )
}