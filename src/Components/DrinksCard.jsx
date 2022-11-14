import React from 'react'

const DrinksCard = ({DR}) => {
  return (
    <div>
        <ul>
            <li>{DR.id}</li>
            <li>{DR.title}</li>
            <li>{DR.price}</li>
        </ul>
    </div>
  )
}

export default DrinksCard