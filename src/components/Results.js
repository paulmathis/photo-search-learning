import React from 'react';
import Pictures from './Pictures';
import '../styles/Result.css';

const Results = props => {
  return (
    <div className="results content">
      <Pictures pictures={props.pictures} />

      <div className="content has-text-centered">
        {props.value.length > 0 && props.pictures.length === 0 && !props.loading ? <h1>No Results</h1> : null}
        {props.loading ? <h1>Loading...</h1> : null}
      </div>
    </div>
  );
};

export default Results;
