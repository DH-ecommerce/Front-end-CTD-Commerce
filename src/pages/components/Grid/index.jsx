import './index.scss';
import { Container, Col, Row } from 'react-bootstrap';
import CardProduct from './CardProduct';
import productList from './assets/API';

export default function CardGrid() {
  return (
    <>
      <Container className='justify-content-center align-items-center pt-5 pb-5 '>
        <Row xs={1} md={2} className='g-4'>
          {productList.map(({ id, img, title, price, category }) => {
            return (
              <Col md={3} sm={4} xs={6}>
                <CardProduct
                  id={id}
                  img={img}
                  title={title}
                  price={price}
                  category={category}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
