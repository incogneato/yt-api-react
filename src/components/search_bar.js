import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
  }

  render() {
    return (
      <div className="search-bar">
        <input
        // value={this.state.term}
        // value of input is eq to state.
        // a controlled component has its value set by state.
        // debatably superfluous to have this callback and all that
        // defined below, but wanted to DRY up use of "event.target.etc"
        onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term})
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
