import React from 'react';
import '../styles/Search.css';

// const Search = props => {
//   return (
//     <div className={`control search ${props.transistion ? 'transistion' : ''}`}>
//       <input onFocus={props.onFocus} defaultValue={props.value} className="input is-large" onChange={props.onChange} />
//     </div>
//   );
// };

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTransition: false
    };
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleFocus() {
    this.setState({
      searchTransition: true
    });
  }

  handleBlur() {
    this.setState({
      searchTransition: false
    });
  }

  render() {
    return (
      <div>
        <div className={`control search ${this.state.searchTransition || this.props.value ? 'transistion' : ''}`}>
          <input
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            defaultValue={this.props.value}
            className="input is-large"
            onChange={this.props.onChange}
          />
        </div>
      </div>
    );
  }
}

export default Search;
