import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import {useDispatch } from "react-redux";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { teamDelete } from '../Redux/action';
import { Teams } from '../data';
import bgTeam from "../img/theteambg-04.png";
import Headerwhite from "./Headerwhite";
function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
      style={{ backgroundColor:'transparent' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const TeamCard = ({teams}) => {
  const dispatch = useDispatch();
  
  return (
    
    <div
    className="pagecontainer"
    style={{
      backgroundImage: `url(${bgTeam})`,
      backgroundSize: "100%",
      backgroundRepeat: "none",
    }}
  >
    <Accordion defaultActiveKey="0">
    
    <Card style={{ width: '20rem' }}>
      
   
      <Card.Img   variant="top" src={teams.img} />
      
      
      <Card.Body>
        <Card.Title >
          {
            teams.FirstName
          }
          {
            teams.LastName
          }
        </Card.Title>
        <CustomToggle eventKey="1">
        <Card.Title>
          {teams.Position}
        </Card.Title>
        </CustomToggle>
        <Accordion.Collapse eventKey="1">
        <Card.Text style={{ width: '38rem' }}>
          {
            teams.career
          }
        </Card.Text>
        </Accordion.Collapse>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{teams.phone}</ListGroup.Item>
        <ListGroup.Item>{teams.email}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Link to="/">
        <Button variant="secondary">Go Home</Button>
        </Link>
        <Link to="/contact">
        <Button variant="primary">Contact US</Button>
        </Link>
      </Card.Body>
    
        <Button variant="primary"   className="btn btn-circle btn-error btn-md" onClick={() => {
                      dispatch(teamDelete(teams.id_team));
                    }}>Delete</Button>
        
    
    
    </Card>
    </Accordion>
   </div> 
  );
    
}

export default TeamCard