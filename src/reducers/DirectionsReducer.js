import {
  SELECT_ROUTE,
  FETCH_ROUTE_DETAILS,
  SELECT_DIRECTION,
} from '../actions';

const INITIAL_STATE = {
  selected: null,
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {

    case SELECT_ROUTE:
      return { ...state, selected: null };

    case FETCH_ROUTE_DETAILS:
      return { ...state, selected: action.payload.data.directions[0] };

    case SELECT_DIRECTION:
      return { ...state, selected: action.payload };

  }

  return state;
}
