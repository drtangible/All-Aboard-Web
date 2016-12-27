import {
  FETCH_PREDICTIONS,
  SELECT_ROUTE,
  SELECT_DIRECTION,
} from '../actions';


export default function(state = null, action) {
  switch(action.type) {

    case FETCH_PREDICTIONS:
      return action.payload.data;

    case SELECT_DIRECTION:
      return null;

    case SELECT_ROUTE:
      return null;

  }

  return state;
}
