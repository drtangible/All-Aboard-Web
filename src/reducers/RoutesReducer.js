import {
  FETCH_ROUTES,
  SELECT_ROUTE,
  FETCH_ROUTE_DETAILS,
} from '../actions';

const INITIAL_STATE = {
  all: [],
  selected: null,
  selectedDetails: { directions: [] },
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {

    case FETCH_ROUTES:
      return { ...state, all: action.payload.data };

    case SELECT_ROUTE:
      return { ...state, selected: action.payload, selectedDetails: { directions: [] } };

    case FETCH_ROUTE_DETAILS:
      return { ...state, selectedDetails: action.payload.data };

  }

  return state;
}
