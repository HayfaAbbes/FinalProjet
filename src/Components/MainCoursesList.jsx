import React from 'react'
import MainCoursesCard from './MainCoursesCard'

const MainCoursesList = ({Mainss}) => {
    console.log(Mainss)
  return (
    <div>
         {
        Mainss.map((el,i)=>(
          <MainCoursesCard key={i} MC={el}/>
        )
        )
      }
     

    </div>
   
  )
}

export default MainCoursesList