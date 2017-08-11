import React, { Component } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import Waypoint from 'react-waypoint';
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
      value: '',
      index: 1,
      loader: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleWaypointEnter = this.handleWaypointEnter.bind(this);
    this.handleWaypointLeave = this.handleWaypointLeave.bind(this);
    this.updateResults = this.updateResults.bind(this);
  }

  // Search box triggers API call
  handleChange(evt) {
    const value = evt.target.value;

    // Clear current pictures, set search value
    this.setState({
      pictures: [],
      value: value,
      index: 1
    });

    // Wait for typing to finish before running search
    this.updateResults(value);
  }

  updateResults(value) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      //Show loader if input has value
      this.setState({
        loading: value.length
      });
      // Only serach if there's something in the input box
      if (value.length > 0) {
        // API Call for search
        unsplash.search.photos(value, this.state.index, 20).then(toJson).then(json => {
          // Remove loader, set pictures
          console.log(this.state.index);
          this.setState({
            loading: false,
            pictures: json.results,
            index: this.state.index + 1
          });
        });
      }
    }, 500);
  }

  handleWaypointEnter() {
    // TODO: figure out the index thing
    console.log('test');
    if (!this.state.loader) {
      console.log('enter');
      this.updateResults(this.state.value);
    }
    this.setState({
      loader: true
    });
  }

  handleWaypointLeave() {
    console.log('leave');
    this.setState({
      loader: false
    });
  }

  render() {
    return (
      <div className="container">
        <div className="control">
          <input className="input" onChange={this.handleChange} />
        </div>

        <Results pictures={this.state.pictures} value={this.state.value} loading={this.state.loading} />
        <Waypoint onEnter={this.handleWaypointEnter} onLeave={this.handleWaypointLeave} />
      </div>
    );
  }
}

export default App;
