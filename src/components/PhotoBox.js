import React from 'react';
import '../styles/PhotoBox.css';

const PhotoBox = props => {
  return (
    <div className="photo-box">
      <img src={props.src} alt="Search Result" />
    </div>
  );
};

export default PhotoBox;
