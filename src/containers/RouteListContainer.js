import _ from 'lodash';
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

function getMatchingRoutes(routes, searchTerm) {
  if (isBlank(searchTerm)) {
    return routes;
  } else {
    return routes.filter(route => containsMatch(`${route.number} ${route.name}`, searchTerm));
  }
}

function isBlank(str) {
  return _.trim(str).length === 0;
}

function containsMatch(str, term) {
  return str.toLowerCase().indexOf(term.toLowerCase()) > -1;
}

function mapStateToProps(state) {
  let {
    routes,
    searchTerm,
  } = state;

  return {
    routes: getMatchingRoutes(routes.all, searchTerm),
  };
}

export default connect(mapStateToProps, { fetchRoutes, selectRoute })(RouteListContainer);
