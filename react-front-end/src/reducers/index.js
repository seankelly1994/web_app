import React from 'react';
import { INCREMENT, DECREMENT } from '../actions/types';
import { combineReducers } from 'redux';
import counterReducer from './counter';
import loggedInReducer from './isLogged';

export default combineReducers({
  counterReducer,
  loggedInReducer
})

