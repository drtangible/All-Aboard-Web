import { combineReducers } from 'redux';
import RoutesReducer from './RoutesReducer';

const rootReducer = combineReducers({
  routes: RoutesReducer,
});

export default rootReducer;
