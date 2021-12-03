import './index.scss'
import { CardGroup, Container, Col, Row } from 'react-bootstrap';
import CardProduct from './CardProduct';
import productList from '../Grid/assets/API'


export default function CardGrid() {
  return (
    <>
      <Container className="justify-content-center align-items-center">

        <Row xs={1} md={2} className="g-4">

          {
            productList.map(({ id, img, title, price, category }) => {
              return (

                <Col md={3} sm={4} xs={6}>
                  <CardProduct img={img} title={title} price={price} category={category} />
                </Col>
              )
            })
          }

        </Row>
      </Container>
    </>

  )
}