import React from 'react'
import {useState} from 'react';
import { MainCourse } from '../data';
import Header from './Header';
import MainCoursesList from './MainCoursesList';

const MainCourses = () => {
    const [MainCour, setMainCourse] = useState(MainCourse)
  return (
    <>
    <Header/>
   <MainCoursesList Mainss={MainCour}/>
   </>
  )
}

export default MainCourses