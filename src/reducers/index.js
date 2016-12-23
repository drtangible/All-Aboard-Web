import { combineReducers } from 'redux';
import RoutesReducer from './RoutesReducer';
import SearchTermReducer from './SearchTermReducer';

const rootReducer = combineReducers({
  routes: RoutesReducer,
  searchTerm: SearchTermReducer,
});

export default rootReducer;
