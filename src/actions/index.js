import axios from 'axios';
import qs from 'qs';

export const FETCH_ROUTES = "FETCH_ROUTES";
export const SELECT_ROUTE = "SELECT_ROUTE";

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
