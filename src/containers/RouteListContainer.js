import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { doSomething } from '../actions';

import RouteList from '../components/RouteList';

class RouteListContainer extends Component {
  render() {
    console.log("RouteListContainer#render", { props: this.props });

    return (
      <RouteList {...this.props} />
    );
  }
}

export default connect(null, {})(RouteListContainer);
