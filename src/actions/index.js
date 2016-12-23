import axios from 'axios';
import qs from 'qs';

export const FETCH_ROUTES = "FETCH_ROUTES";
export const SELECT_ROUTE = "SELECT_ROUTE";
export const FETCH_ROUTE_DETAILS = "FETCH_ROUTE_DETAILS";
export const SELECT_DIRECTION = "SELECT_DIRECTION";
export const UPDATE_SEARCH_TERM = "UPDATE_SEARCH_TERM";

const API_ROOT_URL = "http://localhost:8082";

function apiURL(path) {
  return `${API_ROOT_URL}/${path}`;
};

export function fetchRoutes() {
  let request = axios.get(apiURL('routes'));

  return {
    type: FETCH_ROUTES,
    payload: request,
  };
}

export function selectRoute(route) {
  return {
    type: SELECT_ROUTE,
    payload: route,
  };
}

export function fetchRouteDetails(routeId) {
  let request = axios.get(apiURL(`routes/${routeId}`));

  return {
    type: FETCH_ROUTE_DETAILS,
    payload: request,
  };
}

export function selectDirection(direction) {
  return {
    type: SELECT_DIRECTION,
    payload: direction,
  };
}

export function updateSearchTerm(term) {
  return {
    type: UPDATE_SEARCH_TERM,
    payload: term,
  };
}
