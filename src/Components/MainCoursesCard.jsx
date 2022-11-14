import React from 'react'

const MainCoursesCard = ({MC}) => {
  console.log(MC);
  return (
  <div>
    <ul>
      <li>{MC.id}</li>
      <li>{MC.title}</li>
      <li>{MC.price}</li>
    </ul>
  </div>
  )
}

export default MainCoursesCard