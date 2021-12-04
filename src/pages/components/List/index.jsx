import React from 'react';
// import { Row,Stack } from 'react-bootstrap';

export default function List(props) {
  return (
    <div className="list">
      {props.children}
    </div>
  )
}