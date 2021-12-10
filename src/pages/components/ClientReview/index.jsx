import array from './array';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ReactStars from 'react-stars';
import '../ClientReview/style.scss';

export default function ClientReview() {
  return (
    <Container>
      <h6 className="ms-3 mb-4">Reviews ({array.length})</h6>
      <div>      
        {array.map(({ id, image, content, name, time, stars }) => {
          return (
            <Container key={id}>
              <Card
                style={{
                  border: 'transparent',
                  height: '100%',
                  minHeight: '100%',
                }}
                className='mb-5 p-2'
              >
                <Card.Body className='user_div'>
                  <Row>
                    <Col lg={2} sm={2} xs={3}>
                      <Card.Img
                        sm={2}
                        style={{ maxWidth: '8vw', minWidth: '50px' }}
                        src={image}
                      />
                    </Col>
                    <Col lg={10} sm={10} xs={9}>
                      <Card.Title className='name'>{name}</Card.Title>
                      <Card.Text className='time'>{time}</Card.Text>
                      <ReactStars
                        className='star mb-2'
                        count={5}
                        size={20}
                        color2={'#ffd700'}
                        value={stars}
                        edit={false}
                      />
                      <Card.Text className='content mw-25'>
                        {content}
                      </Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Container>
          );
        })}
      </div>
    </Container>
  );
}
