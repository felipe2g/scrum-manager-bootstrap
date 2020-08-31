import React from 'react';

const HomeCard = (props) => (
  <div className="col-12 col-sm-4" style={{paddingTop: '7px'}}>
  <div className="card" style={{padding: '16px'}}>
      <img 
      className="card-img-top rounded mx-auto d-block" 
      style={{paddingTop: '5px', width: '100px', heigt: '100px'}} 
      src={props.icon} alt={`${props.text} logo`} />
      <div className="card-block">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text">{props.text}</p>
          <button className="btn btn-primary" onClick={props.action}>{props.title}</button>
      </div>
  </div>
</div>

);

export default HomeCard;