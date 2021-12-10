import { useState, Fragment } from 'react';
import './style.scss';
import filterSvg from './filter.svg';
import { Link } from 'react-router-dom';
import {
  Container,
  ToggleButton,
  Accordion,
  Row,
  Col,
  ToggleButtonGroup,
} from 'react-bootstrap';

const Filter = ({ parentCallback }) => {
  const [radioValueCategory, setRadioValueCategory] = useState('');
  const radiosCategory = [
    { name: 'All', value: 'all' },
    { name: 'Headsets', value: 'Headsets' },
    { name: 'Mouses', value: 'Mouses' },
    { name: 'Monitores', value: 'Monitores' },
    { name: 'Hardware', value: 'Hardwares' },
    { name: 'Keyboards', value: 'Keyboards' },
    { name: 'Laptops', value: 'Laptops' },
  ];

  const handleClickFilter = (e) => {
    window.location.href =
      'http://localhost:3000/products/filter/' + e.currentTarget.value;
    setRadioValueCategory(e.currentTarget.value);
    parentCallback(e.currentTarget.value);
  };

  return (
    <>
      <Container>
        <Container className='m-0 d-flex flex-wrap'>
          <Accordion>
            <Accordion.Header style={{ backgroundColor: 'transparent' }}>
              <Row className='d-flex align-items-center filter-button p-2'>
                <Col>
                  <img src={filterSvg} alt='Filter' />
                </Col>
                <Col>
                  <h5 className='m-0'>Filter</h5>
                </Col>
              </Row>
            </Accordion.Header>
            <Accordion.Body className='d-flex flex-column flex-wrap gap-2'>
              <h5>Category</h5>
              <Container className='d-flex gap-4  p-0'>
                <ToggleButtonGroup
                  type='radio'
                  name='categories'
                  className='d-flex flex-wrap gap-3'
                >
                  {radiosCategory.map((radio, idx) => (
                    <Fragment key={idx}>
                      <Link to={`/products/filter/${radio.value}`}>
                        <ToggleButton
                          className='buttons-categories shadow-none'
                          id={`radio-${radio.value}`}
                          type='radio'
                          variant='outline-success'
                          name='categories'
                          value={radio.value}
                          checked={radioValueCategory === radio.value}
                          onChange={(e) => handleClickFilter(e, radio)}
                        >
                          {radio.name}
                        </ToggleButton>
                      </Link>
                    </Fragment>
                  ))}
                </ToggleButtonGroup>
              </Container>
            </Accordion.Body>
          </Accordion>
        </Container>
      </Container>
    </>
  );
};

export default Filter;
