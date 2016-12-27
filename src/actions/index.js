import axios from 'axios';
import qs from 'qs';

export const FETCH_ROUTES = "FETCH_ROUTES";
export const SELECT_ROUTE = "SELECT_ROUTE";
export const FETCH_ROUTE_DETAILS = "FETCH_ROUTE_DETAILS";
export const SELECT_DIRECTION = "SELECT_DIRECTION";
export const UPDATE_SEARCH_TERM = "UPDATE_SEARCH_TERM";
export const FETCH_PREDICTIONS = "FETCH_PREDICTIONS";

// const API_ROOT_URL = "http://localhost:8082";
const API_ROOT_URL = "https://all-aboard-api-proxy.herokuapp.com";

function apiURL(path, queryParams = {}) {
  return `${API_ROOT_URL}/${path}`;
};

export function selectRouteAndFetchDetails(route) {
  return (dispatch) => {
    dispatch(selectRoute(route));
    dispatch(fetchRouteDetails(route.id))
      .then(action => {
        let routeDetails = action.payload.data;
        let defaultDirection = routeDetails.directions[0];
        dispatch(selectDirectionAndFetchPredictions(route, defaultDirection));
      });
  }
}

export function selectDirectionAndFetchPredictions(route, direction) {
  return (dispatch) => {
    dispatch(selectDirection(direction));
    dispatch(fetchPredictions(route, direction));
  }
}

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

export function fetchPredictions(route, direction) {
  return (dispatch) => {
    navigator.geolocation.getCurrentPosition((position => {
      let coords = { lat: position.coords.latitude, lng: position.coords.longitude };
      let stopsWithDistance = direction.stops.map(stop => [stop, computeDistanceBetween(coords,  stop)]);
      let stopsSortedByDistance = stopsWithDistance.sort((stop1, stop2) => {
        return stop1[1] > stop2[1] ? 1 : -1;
      });
      let stop = stopsSortedByDistance[0][0];
      let request = axios.get(apiURL(`routes/${route.id}/stops/${stop.id}/predictions`));

      dispatch({
        type: FETCH_PREDICTIONS,
        payload: request,
      });
    }), null, { enableHighAccuracy: true, timeout: 5000 });
  };
}

function computeDistanceBetween(coord1, coord2, unit) {
  let lat1 = coord1.lat;
  let lon1 = coord1.lng;
  let lat2 = coord2.lat;
  let lon2 = coord2.lng;

  const radlat1 = Math.PI * lat1/180;
  const radlat2 = Math.PI * lat2/180;
  const radlon1 = Math.PI * lon1/180;
  const radlon2 = Math.PI * lon2/180;
  const theta = lon1-lon2;
  const radtheta = Math.PI * theta/180;
  let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  dist = Math.acos(dist);
  dist = dist * 180/Math.PI;
  dist = dist * 60 * 1.1515;
  if (unit=="K") { dist = dist * 1.609344; }
  if (unit=="N") { dist = dist * 0.8684; }

  return dist;
}
