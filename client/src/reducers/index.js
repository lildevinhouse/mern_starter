import { combineReducers } from 'redux';
import authReducer from './authReducer';
import dataReduser from './dataReduser';

export default combineReducers({
  auth: authReducer,
  data: dataReduser
});
