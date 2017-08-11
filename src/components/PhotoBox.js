import React from 'react';
import '../styles/PhotoBox.css';

const PhotoBox = props => {
  return (
    <div className="photo-box">
      <img className="" src={props.src} alt="Search Result" />
    </div>
  );
};

export default PhotoBox;
