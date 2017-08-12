import React, { Component } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import Waypoint from 'react-waypoint';
import sample from '../json/sample.json';
import Results from './Results';
import secret from '../json/secret.json';
import Search from './Search';
import '../styles/App.css';

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
      loader: false,
      total: 1
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleWaypointEnter = this.handleWaypointEnter.bind(this);
    this.updateResults = this.updateResults.bind(this);
  }

  // Search box triggers API call
  handleChange(evt) {
    const value = evt.target.value;

    // Clear current pictures, set search value
    this.setState({
      pictures: [],
      value: value,
      index: 1,
      total: 1
    });

    // Wait for typing to finish before running search
    this.updateResults(value);
  }

  updateResults(value) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      //Show loader if input has value and there are pages left
      this.setState({
        loading: value.length && this.state.index <= this.state.total
      });
      // Only serach if there's something in the input box
      if (value.length > 0 && this.state.index <= this.state.total) {
        // API Call for search
        unsplash.search.photos(value, this.state.index, 30).then(toJson).then(json => {
          // Remove loader, set pictures
          let tempArr = [...this.state.pictures, ...json.results];
          this.setState({
            loading: false,
            pictures: tempArr,
            index: this.state.index + 1,
            total: json.total_pages
          });
        });
      }
    }, 500);
  }

  handleWaypointEnter() {
    // When reaching the bottom of page, if there are more results keep searching
    if (!this.state.loader) {
      this.updateResults(this.state.value);
    }
  }

  render() {
    return (
      <div className="container">
        <Search value={this.state.value} onChange={this.handleChange} />
        <Results pictures={this.state.pictures} value={this.state.value} loading={this.state.loading} />
        <Waypoint onEnter={this.handleWaypointEnter} onLeave={this.handleWaypointLeave} />
      </div>
    );
  }
}

export default App;
