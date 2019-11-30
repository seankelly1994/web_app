import { LOGGEDIN } from '../actions/types';

const initialState = {
    loggedIn: false
}

const loggedInReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGEDIN:
      return !state;
  
    default:
      return state;
  }
}

export default loggedInReducer;
