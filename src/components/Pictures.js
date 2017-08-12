import React from 'react';
import PhotoBox from './PhotoBox';

const Pictures = props => {
  return (
    <div className="columns is-centered">
      <div className="column is-one-third">
        {props.pictures.map((picture, index) => {
          return index % 3 === 0
            ? <PhotoBox key={picture.id} creator={picture.user.name} src={picture.urls.regular} />
            : null;
        })}
      </div>
      <div className="column is-one-third">
        {props.pictures.map((picture, index) => {
          return index % 3 === 1
            ? <PhotoBox key={picture.id} creator={picture.user.name} src={picture.urls.regular} />
            : null;
        })}
      </div>
      <div className="column is-one-third">
        {props.pictures.map((picture, index) => {
          return index % 3 === 2
            ? <PhotoBox key={picture.id} creator={picture.user.name} src={picture.urls.regular} />
            : null;
        })}
      </div>
    </div>
  );
};

export default Pictures;
