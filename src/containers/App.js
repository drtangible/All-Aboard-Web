import React, { Component } from 'react';

import SearchBarContainer from './SearchBarContainer';
import RouteListContainer from './RouteListContainer';
import RouteDetailContainer from './RouteDetailContainer';

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 column-sidebar">
          <SearchBarContainer />
          <RouteListContainer />
        </div>

        <div className="col-md-8 column-main">
          <RouteDetailContainer />
        </div>
      </div>
    );
  }
}
