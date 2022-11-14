import React from 'react'
import { Drink } from '../data';
import {useState} from 'react';
import DrinksList from './DrinksList';
import Header from './Header';

const Drinks = () => {
    const [Drk,setDrink] = useState(Drink);
  return (
    <>
    <Header/>
   <DrinksList Drinkss={Drk} />
   </>

  )
}

export default Drinks