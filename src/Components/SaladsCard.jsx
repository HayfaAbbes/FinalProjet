import React from 'react'

const SaladsCard = ({SL}) => {
  return (
    <div>
        <ul>
            <li>{SL.id}</li>
            <li>{SL.title}</li>
            <li>{SL.price}</li>
        </ul>
    </div>
  )
}

export default SaladsCard