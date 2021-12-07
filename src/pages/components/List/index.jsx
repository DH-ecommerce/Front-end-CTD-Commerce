import "./style.scss"
import React from 'react';

// import { Container } from 'react-bootstrap';

export default function List(props) {
  return (
    <div className="list-div">
      {props.children}
    </div>
  )
}