import React from 'react'
import StartersCard from './StartersCard'

const StartersList = ({Starterss}) => {
  console.log(Starterss)
  return (
    <div>
    {
      Starterss.map((el,i)=>(
        <StartersCard key={i} ST={el}/> 
      ))
    }
   
   </div>
  )
}

export default StartersList