import React, { Component } from 'react';

export default class RouteDetail extends Component {

  componentWillUpdate(nextProps) {
    let {
      params,
      fetchRouteDetails,
    } = this.props;

    if (params.id !== nextProps.params.id) {
      fetchRouteDetails(params.id);
    }

    this._renderDirections = this._renderDirections.bind(this);
    this._renderClosestStop = this._renderClosestStop.bind(this);
  }

  render() {
    let {
      route,
    } = this.props;

    if (!route) return <div></div>;

    return (
      <div className="route-detail-container">
        <div className="route-detail-header">
          <span className="route-detail-header-number">{route.number}</span>
          <span className="route-detail-header-name">{route.name}</span>
        </div>

        {this._renderDirections()}
        {this._renderClosestStop()}
      </div>
    );
  }

  _renderDirections() {
    let {
      routeDetails,
      selectedDirection,
      selectDirection,
    } = this.props;

    return (
      <div className="route-detail-directions text-center">
        {routeDetails.directions.map(direction => (
          <div
            key={direction.id}
            className={`col-6 ${selectedDirection && selectedDirection.id === direction.id ? 'route-detail-directions-selected' : ''}`}
            onClick={() => selectDirection(direction)}
            >
            {direction.name}
          </div>
        ))}
      </div>
    );
  }

  _renderClosestStop() {
    let {
      selectedDirection,
    } = this.props;

    if (!selectedDirection) return <div></div>;

    console.log("selectedDirection", selectedDirection.name);

    // TODO: Find closest stop by user's distance.
    let closestStop = selectedDirection.stops[0];

    return (
      <div className="route-detail-stop text-center">
        <div className="route-detail-stop-name">
          {closestStop.name}
        </div>
      </div>
    );
  }

}
