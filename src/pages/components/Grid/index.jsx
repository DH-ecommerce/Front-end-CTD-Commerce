import './index.scss'
import { CardGroup, Container, Col } from 'react-bootstrap';
import CardProduct from './CardProduct';
import productList from '../Grid/assets/API'


export default function CardGrid() {
    return (
      <>
      <Container className="justify-content-center align-items-center">
  
        <CardGroup>
          
            {
              productList.map(({ id,img, title, price, category }) => {
                return (
                  <Col xl={3} sm={6}>
                    <CardProduct img={img} title={title} price={price} category={category} />
                  </Col>
                )
              })
            }
          
        </CardGroup>
      </Container>
      </>
  
    )
  }