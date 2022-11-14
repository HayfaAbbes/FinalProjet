import React from 'react'
import { useSelector } from 'react-redux';
import TeamCard from './TeamCard';

const TeamList = () => {
  const teamList=useSelector((state) => state.value);
  
  return (
   
    <div className="" >
        {
          teamList.map((teams,index)=>(
           <TeamCard teams={teams} key={index}/> 
          ))
        };
    </div>

  );


};

export default TeamList;