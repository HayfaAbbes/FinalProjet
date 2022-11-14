import React from 'react';
import Card from 'react-bootstrap/Card';
import "../Card.css";
const PriCard = ({Pri}) => {
    console.log(Pri);
  return (
    <div className="card">
    <div className="card-header">
      <div className="profile">
        <span className="letter">PP</span>
      </div>
      <div className="card-title-group">
        <h5 className="card-title">{Pri.title}</h5>
        <div className="card-date">{Pri.price}</div>
      </div>
    </div>
    <img className="card-image" src={Pri .img} alt="Logo" />
    <div className="card-text">{Pri.description}</div>
    <div className="card-like-bar">
      {Pri.liked ? (
        "♡"
      ) : (
        "❤"
      )}
      <div className="like-text">
        <b>{Pri.likeCount}</b>
      </div>
    </div>
  </div>
  );
      };
export default PriCard