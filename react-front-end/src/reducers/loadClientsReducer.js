import { FETCH_CLIENTS_BEGIN, FETCH_CLIENTS_SUCCESS, FETCH_CLIENTS_FAILURE} from '../actions/types';

const initialState = {
    total_clients: 0,
    loading: false,
    error: null
};

const loadClientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CLIENTS_BEGIN:
            return {
                ...state,
                loading: true,
                total_clients: action.total_clients,
                error: null
            }
      
        case FETCH_CLIENTS_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    total_clients: action.payload.total_clients
                }
        
        case FETCH_CLIENTS_FAILURE:
                return {
                    ...state,
                    loading: false,
                    error: action.payload.error,
                    total_clients: 0
                }

        default:
            return state;
    }
  }
  
  export default loadClientsReducer;