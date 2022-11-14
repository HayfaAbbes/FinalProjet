import React from 'react'
import SaladsCard from './SaladsCard';

const SaladsList = ({Salade}) => {
  console.log(Salade);
  return (
    <div>
        {
        Salade.map((el,i)=>(
          <SaladsCard key ={i} SL={el}/>
        ))
      }
      
    
    </div>
  )
}

export default SaladsList