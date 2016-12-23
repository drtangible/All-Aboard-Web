import {
  UPDATE_SEARCH_TERM,
} from '../actions';

export default function(state = null, action) {
  switch(action.type) {

    case UPDATE_SEARCH_TERM:
      return action.payload;

  }

  return state;
}
