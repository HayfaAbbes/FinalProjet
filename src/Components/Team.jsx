import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import React from 'react'
import { Teams } from '../data';
import TeamList from'./TeamList'
import Header from './Header';
import { useSelector } from 'react-redux';
import bgTeam from "../img/theteambg-04.png";
import Headerwhite from "./Headerwhite";


const Team = () => {
  const teamList =useSelector((state) => state.team);
    

  return (
  
     <div
  className="pagecontainer"
  style={{
    backgroundImage: `url(${bgTeam})`,
    backgroundSize: "100%",
    backgroundRepeat: "none",
  }}
>
  <Headerwhite />
    <TeamList NbTeams={teamList}/>
    </div>

  )
}

export default Team