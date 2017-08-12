import React from 'react';
import '../styles/PhotoBox.css';

const PhotoBox = props => {
  return (
    <div className="photo-box" style={{ backgroundImage: `url(${props.src})` }}>
      <div className="hoverWrapper">
        <img className="" src={props.src} alt="Search Result" />
        <h4>
          {props.creator}
        </h4>
      </div>
    </div>
  );
};

export default PhotoBox;
