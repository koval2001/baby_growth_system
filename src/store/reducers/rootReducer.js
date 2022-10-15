import { combineReducers } from 'redux';
import authReducer from './authReducer';
import measureReducer from './measureReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  measure: measureReducer,
});

export default rootReducer;
