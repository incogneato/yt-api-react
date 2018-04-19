import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
  }

  render() {
    return (
      <div>
        <input
        // value={this.state.term}
        // value of input is eq to state.
        // a controlled component has its value set by state.
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
