import { LOGIN_BEGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/types';

const initialState = {
    loggedIn: false,
    error: null,
    token: null,
    loading: false
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_BEGIN:
            return {
                ...state,
                loading: true
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                token: action.token
            }
        
        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
                data: null
            }

        default:
            return state;
    }
  }
  
  export default loginReducer;