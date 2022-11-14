import React from 'react'
import { Salad } from '../data';
import {useState} from 'react';
import SaladsList from './SaladsList';
import Header from './Header';

const Salads = () => {
    const [Sld, setSalad] = useState(Salad)
  return (
    <>
    <Header/>
   <SaladsList Salade={Sld}/>
   </>
  )
}

export default Salads