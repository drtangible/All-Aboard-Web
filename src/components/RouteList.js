import React, { Component } from 'react';
import { Link } from 'react-router';

export default class RouteList extends Component {
  render() {
    let {
      routes,
      selectRouteAndFetchDetails,
    } = this.props;

    if (!routes) return <div></div>;

    return (
      <div>
        {routes.map(route => (
          <Link to={`/routes/${route.number}`} key={route.number} className="route-list-item" onClick={() => selectRouteAndFetchDetails(route)}>
            <span className="route-list-item-number">{route.number}</span>
            <span className="route-list-item-name">{route.name}</span>
          </Link>
        ))}
      </div>
    );
  }
}
