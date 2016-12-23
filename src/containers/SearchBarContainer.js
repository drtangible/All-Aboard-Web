import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSearchTerm } from '../actions';

import SearchBar from '../components/SearchBar';

class SearchBarContainer extends Component {
  render() {
    console.log("SearchBarContainer#render", { props: this.props });

    return (
      <SearchBar {...this.props} />
    );
  }
}

export default connect(null, { updateSearchTerm })(SearchBarContainer);
