import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRoutes, selectRoute } from '../actions';

import RouteList from '../components/RouteList';

class RouteListContainer extends Component {

  componentWillMount() {
    let {
      fetchRoutes,
    } = this.props;

    fetchRoutes();
  }

  render() {
    console.log("RouteListContainer#render", { props: this.props });

    return (
      <RouteList {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {
    routes: state.routes.all,
  };
}

export default connect(mapStateToProps, { fetchRoutes, selectRoute })(RouteListContainer);
