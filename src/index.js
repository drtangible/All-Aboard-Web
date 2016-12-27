import React from 'react';
import ReactDOM from 'react-dom';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, Link, browserHistory } from 'react-router';
import routes from './routes';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise, thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router routes={routes} history={browserHistory} />
  </Provider>
  , document.querySelector('.container-fluid'));
