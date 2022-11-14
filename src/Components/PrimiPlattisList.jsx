import React from 'react'
import PriCard from './PriCard'

const  PrimiPlattisList = ({Primis}) => {
    console.log(Primis)
  return (
    <div>
    
        {Primis.map((el, i) => (
          <PriCard key={i} Pri={el} />
      ))}
 
   
   
  
 
  </div>
  );
};

export default PrimiPlattisList;