import { combineReducers } from 'redux';
import RoutesReducer from './RoutesReducer';
import SearchTermReducer from './SearchTermReducer';
import DirectionsReducer from './DirectionsReducer';
import PredictionsReducer from './PredictionsReducer';

const rootReducer = combineReducers({
  routes: RoutesReducer,
  searchTerm: SearchTermReducer,
  directions: DirectionsReducer,
  predictions: PredictionsReducer,
});

export default rootReducer;
