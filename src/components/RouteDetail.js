import React, { Component } from 'react';

export default class RouteDetail extends Component {

  componentWillUpdate(nextProps) {
    let {
      stop,
      params,
      fetchRouteDetails,
      fetchPredictions,
    } = this.props;

    if (params.id !== nextProps.params.id) {
      fetchRouteDetails(nextProps.params.id);
    }

    // TODO: Figure out where to better handle this.
    let previousStopId = stop ? stop.id : null;
    let nextStopId = nextProps.stop ? nextProps.stop.id : null;
    if (nextStopId && (nextStopId !== previousStopId)) {
      fetchPredictions(nextProps.route.id, nextProps.stop.id);
    }

    this._renderDirections = this._renderDirections.bind(this);
    this._renderStop = this._renderStop.bind(this);
  }

  render() {
    let {
      route,
      predictions,
    } = this.props;

    if (!route) return <div></div>;

    return (
      <div className="route-detail-container">
        <div className="route-detail-header">
          <span className="route-detail-header-number">{route.number}</span>
          <span className="route-detail-header-name">{route.name}</span>
        </div>

        {this._renderNextArrival(predictions[0])}
        {this._renderDirections()}
        {this._renderStop()}
        {this._renderUpcommingArrival(predictions[1])}
        {this._renderUpcommingArrival(predictions[2])}
      </div>
    );
  }

  _renderNextArrival(prediction) {
    if (!prediction) return <div></div>;

    return (
      <div className="text-center">
        <div>
          {prediction.arrivingNow ? "DUE" : prediction.minutesAway}
        </div>

        <div>
          {prediction.arrivingNow ? "" : "minutes"}
        </div>
      </div>
    );
  }

  _renderUpcommingArrival(prediction) {
    if (!prediction) return <div></div>;

    return (
      <div className="text-center">
        <div>
          {prediction.arrivingNow ? "DUE" : prediction.minutesAway}
        </div>

        <div>
          {prediction.arrivingNow ? "" : "minutes"}
        </div>
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

  _renderStop() {
    let {
      stop,
    } = this.props;

    if (!stop) return <div></div>;

    return (
      <div className="route-detail-stop text-center">
        <div className="route-detail-stop-name">
          {stop.name}
        </div>
      </div>
    );
  }

}
