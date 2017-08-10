import React from 'react';

const PhotoBox = props => {
  return (
    <div>
      <img src={props.src} alt="Search Result" />
    </div>
  );
};

export default PhotoBox;
