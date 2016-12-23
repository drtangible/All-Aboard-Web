import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { doSomething } from '../actions';

import RouteDetail from '../components/RouteDetail';

class RouteDetailContainer extends Component {
  render() {
    console.log("RouteDetailContainer#render", { props: this.props });

    return (
      <RouteDetail {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {
    route: state.routes.selected,
  }
}

export default connect(mapStateToProps, {})(RouteDetailContainer);
