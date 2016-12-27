import React, { Component } from 'react';

export default class RouteDetail extends Component {

  componentWillUpdate(nextProps) {
    this._renderDirections = this._renderDirections.bind(this);
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

        {this._renderDirections()}

        {this._renderNextArrival(predictions)}
        {predictions && this._renderUpcommingArrival(predictions[1])}
        {predictions && this._renderUpcommingArrival(predictions[2])}
      </div>
    );
  }

  _renderNextArrival(predictions) {
    if (predictions === null) {
      return (
        <div className="route-detail-loading">
          <i className="fa fa-xl fa-circle-o-notch fa-spin" />
        </div>
      );
    }

    if (predictions.length === 0) {
      return (
        <div className="route-detail-no-service">
          No service scheduled
        </div>
      );
    };

    let prediction = predictions[0];

    return (
      <div className="route-detail-next-arrival">
        <div className="route-detail-next-arrival-minutes-away">
          {prediction.arrivingNow ? "DUE" : prediction.minutesAway}
        </div>

        <div className="route-detail-next-arrival-minutes-away-label">
          {prediction.arrivingNow ? "" : "minutes"}
        </div>

        <div className="route-detail-next-arrival-stop-name">
          {prediction.stopName}
        </div>

        <div className="route-detail-next-arrival-destination">
          To {prediction.destination}
        </div>
      </div>
    );
  }

  _renderUpcommingArrival(prediction) {
    if (!prediction) return <div></div>;

    return (
      <div className="route-detail-upcoming-arrival">
        {prediction.arrivingNow ? "DUE" : prediction.minutesAway} {prediction.arrivingNow ? "" : "minutes"}
      </div>
    );
  }

  _renderDirections() {
    let {
      route,
      routeDetails,
      selectedDirection,
      selectDirectionAndFetchPredictions,
    } = this.props;

    return (
      <div className="route-detail-directions text-center">
        {routeDetails.directions.map(direction => (
          <div
            key={direction.id}
            className={`col-6 ${selectedDirection && selectedDirection.id === direction.id ? 'route-detail-directions-selected' : ''}`}
            onClick={() => selectDirectionAndFetchPredictions(route, direction)}
            >
            {direction.name}
          </div>
        ))}
      </div>
    );
  }

}
