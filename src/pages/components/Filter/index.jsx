import React, { useState } from 'react';
import './style.scss';
import { Container, Button, ToggleButton, Accordion, Row, Col, ButtonGroup, ToggleButtonGroup } from 'react-bootstrap';

const Filter = () => {
  const [checkedCategory, setCheckedCategory] = useState(false);
  const [radioValueCategory, setRadioValueCategory] = useState('');

  const radiosCategory = [
    { name: 'Headphone', value: '1' },
    { name: 'Mouses', value: '2' },
    { name: 'Monitores', value: '3' },
    { name: 'Hardware', value: '4' }
  ]

  const [checkedSort, setCheckedSort] = useState(false);
  const [radioValueSort, setRadioValueSort] = useState('');

  const radiosSort = [
    { name: 'Newest', value: '5' },
    { name: 'Oldest', value: '6' }
  ]

  return (
    <>
      <Container>
        <Container className='container-filter m-0 d-flex'>
          <Accordion>
            <Accordion.Header>
              <Row className="d-flex align-items-center filter-button p-2">
                <Col>
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33331 18V12.1667" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3.33331 8.83333V3" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10 18V10.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10 7.16667V3" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M16.6667 18V13.8333" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M16.6667 10.5V3" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M0.833313 12.1667H5.83331" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7.5 7.16667H12.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14.1667 13.8333H19.1667" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </Col>
                <Col>
                  <h5 className="m-0">Filter</h5>
                </Col>
              </Row>
            </Accordion.Header>
            <Accordion.Body className='d-flex flex-column gap-2'>
              <h5>Category</h5>
              <Container className='d-flex gap-4 flex-wrap p-0'>
                <ToggleButtonGroup type="checkbox" name="categories" className='d-flex gap-3'>
                  {radiosCategory.map((radio, idx) => (
                    <ToggleButton
                      className='buttons-categories shadow-none'
                      key= {idx}
                      id={`checkbox-${radio.value}`}
                      type="checkbox"
                      variant="outline-success"
                      name="categories"
                      value={radio.value}
                      checked={radioValueCategory === radio.value}
                      onChange={(e) => setRadioValueCategory(e.currentTarget.value)}
                    >
                      {radio.name}
                    </ToggleButton>
                  )
                  )}
                </ToggleButtonGroup>
              </Container>
              <h5>Sort by</h5>
              <Container className='d-flex gap-4 flex-wrap p-0'>
                <ToggleButtonGroup name="sort" className='d-flex gap-3'>
                  {radiosSort.map((radio, idx) => (
                    <ToggleButton
                      className='buttons-categories shadow-none'
                      key={idx}
                      id={`radio-${radio.value}`}
                      type="checkbox"
                      variant="outline-success"
                      name="sort"
                      value={radio.value}
                      checked={radioValueSort === radio.value}
                      onChange={(e) => setRadioValueSort(e.currentTarget.value)}
                    >
                      {radio.name}
                    </ToggleButton>
                  )
                  )}
                </ToggleButtonGroup>
              </Container>
              <Container className='d-flex align-items-center justify-content-center my-4 mx-0 p-0'>
                <Button size='lg' className='apply p-2'>
                  Apply Filters
                </Button>
              </Container>
            </Accordion.Body>
          </Accordion>
        </Container>
      </Container>
    </>
  );
};

export default Filter;
