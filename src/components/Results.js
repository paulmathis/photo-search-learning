import React from 'react';
import PhotoBox from './PhotoBox';
import '../styles/Result.css';

const Results = props => {
  return (
    <div className="results">
      {props.pictures.map(picture => {
        return <PhotoBox src={picture.urls.small} />;
      })}
      {props.value.length > 0 && props.pictures.length === 0 && !props.loading ? <h1>No Results</h1> : null}
      {props.loading ? <h1>Loading</h1> : null}
    </div>
  );
};

export default Results;
