import {
  FETCH_ROUTES,
  SELECT_ROUTE,
} from '../actions';

const INITIAL_STATE = {
  all: [],
  selected: null,
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {

    case FETCH_ROUTES:
      return { ...state, all: action.payload.data };

    case SELECT_ROUTE:
      return { ...state, selected: action.payload };

  }

  return state;
}
