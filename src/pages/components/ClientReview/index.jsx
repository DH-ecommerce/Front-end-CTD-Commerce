import array from './array';
import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import ReactStars from 'react-stars';
import '../ClientReview/style.scss';

export default function ClientReview() {
  return (
    <Container className='comment' as='section'>
      <p>Review ({array.length})</p>
      <div>
        {array.map(({ id, image, content, name, time }) => {
          return (
            <Container key={id}>
              <Card
                style={{
                  border: 'transparent',
                  maxHeight: '40vh',
                  minHeight: '40vh',
                }}
                className='mb-5 p-2'
              >
                <Card.Body className='user_div'>
                  <Row>
                    <Col>
                      <Card.Img
                        style={{ maxWidth: '8vw', minWidth: '120px' }}
                        src={image}
                      />
                    </Col>
                    <Col lg={10} sm={8} xs={5}>
                      <Card.Title className='name'>{name}</Card.Title>
                      <Card.Text className='time'>{time}</Card.Text>
                      <ReactStars
                        className='star'
                        count={5}
                        size={20}
                        color2={'#ffd700'}
                      />
                      <Card.Text className='content mw-25 text-style'>
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
