/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';
import app_R from './app_R';
import auth_R from './auth_R';

const reducers = combineReducers({
  app_R,
  auth_R,
});

export default reducers;
