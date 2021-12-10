import "./style.scss"
import React from 'react';
import { ItemsContext } from "../../../hooks/ItemsProvider/ItemsProvider";
import {useContext} from 'react'


export default function List() {
  const {cartItemsListEffect} = useContext(ItemsContext)
  
  return (
    <div className="list-div">
      {cartItemsListEffect}
    </div>
  )
}