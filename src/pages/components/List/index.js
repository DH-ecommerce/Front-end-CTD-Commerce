import React from 'react';
import { Row,Stack } from 'react-bootstrap';

export default function List(props) {
  return (
    // <Row className="list">
    <div className="list">
      {props.children}

    </div>
  )
}