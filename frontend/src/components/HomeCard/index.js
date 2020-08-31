import React from 'react';
import { Link } from 'react-router-dom';

const HomeCard = (props) => (
  <div className="col-12 col-sm-4" style={{ paddingTop: '7px' }}>
    <Link key={props.title} to={`/${props.link}`}>
      <div className="card" style={{ padding: '16px' }}>
        <img
          className="card-img-top rounded mx-auto d-block"
          style={{ paddingTop: '5px', width: '100px', heigt: '100px' }}
          src={props.icon} alt={`${props.text} logo`} />
        <div className="card-block">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text">{props.text}</p>
        </div>
      </div>
    </Link>
  </div>

);

export default HomeCard;