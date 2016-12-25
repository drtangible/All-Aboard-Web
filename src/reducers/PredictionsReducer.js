import {
  FETCH_PREDICTIONS,
  SELECT_ROUTE,
  SELECT_DIRECTION,
} from '../actions';


export default function(state = [], action) {
  switch(action.type) {

    case FETCH_PREDICTIONS:
      return action.payload.data;

    case SELECT_DIRECTION:
      return [];

    case SELECT_ROUTE:
      return [];

  }

  return state;
}
