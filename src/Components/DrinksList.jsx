import React from 'react'
import DrinksCard from './DrinksCard'

const DrinksList = ({Drinkss}) => {
  return (
    <div>
        {
        Drinkss.map((el,i)=>(
          <DrinksCard key={i} DR={el}/>
        ))
      }
        

    </div>
  )
}

export default DrinksList