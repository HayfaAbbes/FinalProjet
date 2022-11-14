import React from 'react'
import {useState} from 'react';
import PrimiPlattisList from './PrimiPlattisList';
import { PrimiPlatti } from '../data';
import Header from './Header';

const PrimiPlattis =() =>{
    const [Primi, setPrimi] = useState(PrimiPlatti)

    console.log("aaa111");
    return (
        
            <>
    <Header/>
          <PrimiPlattisList Primis={Primi}/>
</>
        
    );
}

export default PrimiPlattis