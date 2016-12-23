import React, { Component } from 'react';

export default class RouteDetail extends Component {
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
      </div>
    );
  }
}
