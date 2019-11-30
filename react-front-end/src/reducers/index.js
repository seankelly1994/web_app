import React from 'react';
import { combineReducers } from 'redux';
import counterReducer from './counter';
import loggedInReducer from './isLogged';
import chartDisplayReducer from './chart';

const rootReducer = combineReducers({
  counter: counterReducer,
  isLogged: loggedInReducer,
  chartDisplay: chartDisplayReducer
});

export default rootReducer;

