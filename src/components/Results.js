import React from 'react';
import PhotoBox from './PhotoBox';

const Results = props => {
  return (
    <div className="searchResult">
      {props.pictures.map(picture => {
        return <PhotoBox src={picture.urls.small} />;
      })}
      {props.value.length > 0 && props.pictures.length === 0 && !props.loading ? <h1>No Results</h1> : null}
      {props.loading ? <h1>Loading</h1> : null}
    </div>
  );
};

export default Results;
