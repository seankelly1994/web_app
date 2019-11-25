import { INCREMENT, DECREMENT } from '../actions/types';

const initialState = {
    loggedIn: false
}

const loggedInReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    
      case DECREMENT:
        return state - 1;
  
    default:
      return state;
  }
}

export default loggedInReducer;
