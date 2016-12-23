import { combineReducers } from 'redux';
import RoutesReducer from './RoutesReducer';
import SearchTermReducer from './SearchTermReducer';
import DirectionsReducer from './DirectionsReducer';

const rootReducer = combineReducers({
  routes: RoutesReducer,
  searchTerm: SearchTermReducer,
  directions: DirectionsReducer,
});

export default rootReducer;
