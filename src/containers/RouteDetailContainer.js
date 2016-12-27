import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectDirectionAndFetchPredictions } from '../actions';

import RouteDetail from '../components/RouteDetail';

class RouteDetailContainer extends Component {
  render() {
    return (
      <RouteDetail {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {
    route: state.routes.selected,
    routeDetails: state.routes.selectedDetails,
    selectedDirection: state.directions.selected,
    predictions: state.predictions,
  }
}

export default connect(mapStateToProps, { selectDirectionAndFetchPredictions })(RouteDetailContainer);
