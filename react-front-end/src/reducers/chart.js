import { DISPLAY } from '../actions/types';

const initialState = {
    display: false
}

const chartDisplayReducer = (state = initialState.display, action) => {
  switch (action.type) {
    case DISPLAY:
      return true;
  
    default:
      return state;
  }
}

export default chartDisplayReducer;
