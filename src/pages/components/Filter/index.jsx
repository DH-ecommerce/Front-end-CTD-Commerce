import React, { useState } from 'react';
import './style.scss';
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
  const [checkedCategory, setCheckedCategory] = useState(false);
  const [radioValueCategory, setRadioValueCategory] = useState('');

  const [urlFilter, setUrlFilter] = useState('');

  const [radiosCategory, setRadiosCategory] = useState([
    { name: 'All', value: 'all' },
    { name: 'Headsets', value: 'Headsets' },
    { name: 'Mouses', value: 'Mouses' },
    { name: 'Monitores', value: 'Monitores' },
    { name: 'Hardware', value: 'Hardwares' },
    { name: 'Keyboards', value: 'Keyboards' },
    { name: 'Laptops', value: 'Laptops' },
  ]);

  const handleClickFilter = (e, radio) => {
    window.location.href='http://localhost:3000/products/filter/' + e.currentTarget.value;
    setRadioValueCategory(e.currentTarget.value)
    parentCallback(e.currentTarget.value)
  }

  const radiosSort = [
    { name: 'Newest', value: '5' },
    { name: 'Oldest', value: '6' }
  ]
  
  return (
    <>
      <Container>
        <Container className='container-filter m-0 d-flex'>
          <Accordion>
            <Accordion.Header style={{ backgroundColor: 'transparent' }}>
              <Row className="d-flex align-items-center filter-button p-2" >
                <Col>
                  <svg
                    width='20'
                    height='21'
                    viewBox='0 0 20 21'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M3.33331 18V12.1667'
                      stroke='black'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M3.33331 8.83333V3'
                      stroke='black'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M10 18V10.5'
                      stroke='black'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M10 7.16667V3'
                      stroke='black'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M16.6667 18V13.8333'
                      stroke='black'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M16.6667 10.5V3'
                      stroke='black'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M0.833313 12.1667H5.83331'
                      stroke='black'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M7.5 7.16667H12.5'
                      stroke='black'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M14.1667 13.8333H19.1667'
                      stroke='black'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </Col>
                <Col>
                  <h5 className='m-0'>Filter</h5>
                </Col>
              </Row>
            </Accordion.Header>
            <Accordion.Body className='d-flex flex-column gap-2'>
              <h5>Category</h5>
              <Container className='d-flex gap-4 flex-wrap p-0'>
                <ToggleButtonGroup
                  type='radio'
                  name='categories'
                  className='d-flex gap-3'
                >
                  {radiosCategory.map((radio, idx) => (
                    <Link to={`/products/filter/${radio.value}`}>
                      <ToggleButton
                        className='buttons-categories shadow-none'
                        key= {idx}
                        id={`radio-${radio.value}`}
                        type="radio"
                        variant="outline-success"
                        name="categories"
                        value={radio.value}
                        checked={radioValueCategory === radio.value}
                        onChange={(e) => handleClickFilter(e, radio)}
                      >
                        {radio.name}
                      </ToggleButton>
                    </Link>
                  )
                  )}
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
