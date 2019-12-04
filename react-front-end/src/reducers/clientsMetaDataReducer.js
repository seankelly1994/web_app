import { FETCH_CLIENTS_METADATA_BEGIN, FETCH_CLIENTS_METADATA_SUCCESS, 
    FETCH_CLIENTS_METADATA_FAILURE } from '../actions/types';

const initialState = {
    loading: false,
    error: null,
    data: null
};

const clientsMetaDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CLIENTS_METADATA_BEGIN:
            return {
                ...state,
                loading: true
            }

        case FETCH_CLIENTS_METADATA_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload
            }
        
        case FETCH_CLIENTS_METADATA_FAILURE:
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
  
  export default clientsMetaDataReducer;