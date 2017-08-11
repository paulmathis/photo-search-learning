import React, { Component } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import sample from '../json/sample.json';
import Results from './Results';
import secret from '../json/secret.json';

// Unsplash API info
const unsplash = new Unsplash({
  applicationId: secret.applicationId,
  secret: secret.secret,
  callbackUrl: secret.callbackUrl
});

// Timer variable
let timer = null;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
      loading: false,
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // Search box triggers API call
  handleChange(evt) {
    clearTimeout(timer);
    const value = evt.target.value;

    // Wait for typing to finish before running search
    timer = setTimeout(() => {
      // Clear current pictures, show loader if input has value, set search value
      this.setState({
        pictures: [],
        loading: value.length,
        value: value
      });

      // Only serach if there's something in the input box
      if (value.length > 0) {
        // API Call for search
        unsplash.search.photos(value, 1, 20).then(toJson).then(json => {
          // Remove loader, set pictures
          this.setState({
            loading: false,
            pictures: json.results
          });
        });
      }
    }, 500);
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange} />
        <Results pictures={sample.results} value={this.state.value} loading={this.state.loading} />
      </div>
    );
  }
}

export default App;
