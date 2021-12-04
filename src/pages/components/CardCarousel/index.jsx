import {Container, Col, Row } from 'react-bootstrap';
// import {Link} from "react-router-dom";
import productList from '../Grid/assets/API';
import OneCard from './Card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CardCarousel() {
    
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3
  };

    return (
      <>
      <Container>
        <div className="title-product">
          <h4>Featured products</h4>
          <h6>see all</h6>
          {/* <Link to='/'>see all</Link> */}
        </div>
      <Slider {...settings}>          
            {
              productList.map(({ id,img, title, price, category }) => {
                return (
                  <>
                  <Col>
                      <OneCard img={img} title={title} price={price} category={category} />
                  </Col>
                  </>
                )
              })
            }
        </Slider>
      </Container>
      </>
  
    )
  }