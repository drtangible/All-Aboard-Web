import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import RouteDetailContainer from './containers/RouteDetailContainer';

export default (
  <Route path="/" component={App}>
     <Route path="routes/:id" component={RouteDetailContainer} onEnter={() => console.log("onEnter")}/>
  </Route>
);
