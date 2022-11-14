import React from 'react'

const StartersCard = ({ST}) => {
  return (
    <div>
        <ul>
            <li>{ST.id}</li>
            <li>{ST.title}</li>
            <li>{ST.price}</li>
        </ul>
    </div>
  )
}

export default StartersCard