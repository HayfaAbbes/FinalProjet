import React from 'react'
import {useState} from 'react';
import { Starter } from '../data';
import Header from './Header';
import StartersList from './StartersList';

const Starters = () => {
    const [Str, setStarter] = useState(Starter)
  return (
    <>
    <Header/>
    <StartersList Starterss={Str}/>
    </>
  )
}

export default Starters