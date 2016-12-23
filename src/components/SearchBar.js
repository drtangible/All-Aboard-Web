import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };

    this._onChange = this._onChange.bind(this);
  }

  render() {
    let {
      term,
    } = this.state;

    return (
      <div className="search-bar-container">
        <input
          className="search-bar-input"
          type="text"
          placeholder="Search for a route"
          value={term}
          onChange={this._onChange}
          />
      </div>
    );
  }

  _onChange(e) {
    this.setState({
      term: e.target.value,
    });
  }
}
