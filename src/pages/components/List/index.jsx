import "./style.scss"
import React from 'react';
import { ItemsContext } from "../ItemsProvider/ItemsProvider";
import {useContext} from 'react'

// import { Container } from 'react-bootstrap';

export default function List() {
  const {cartItemsListEffect} = useContext(ItemsContext)
  
  return (
    <div className="list-div">
      {cartItemsListEffect}
    </div>
  )
}