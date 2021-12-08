import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import firstBanner from '../../../assets/firstBanner.png';
import secondBanner from '../../../assets/secondBanner.png';
import thirdBanner from '../../../assets/thirdBanner.png';

export default function Banner() {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img className='d-block w-100' src={firstBanner} alt='First Banner' />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={secondBanner}
            alt='Second Banner'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={thirdBanner} alt='Third Banner' />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
