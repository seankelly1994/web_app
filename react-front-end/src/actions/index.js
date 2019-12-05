import { INCREMENT, DECREMENT, FETCH_CLIENTS_BEGIN, FETCH_CLIENTS_SUCCESS, FETCH_CLIENTS_FAILURE,
    FETCH_CLIENTS_METADATA_BEGIN, FETCH_CLIENTS_METADATA_FAILURE, FETCH_CLIENTS_METADATA_SUCCESS,
    LOGIN_BEGIN, LOGIN_SUCCESS, LOGIN_FAILURE 
} from '../actions/types';
import api from '../utils/api/index';


//These are test actions
export const increment = () => {
    return {
        type: INCREMENT
    }
}
export const decrement = () => {
    return {
        type: DECREMENT
    }
}

//This action is used to maintain the login
export const login_user = () => async (dispatch) => {
    //Loading
    dispatch({
        type: LOGIN_BEGIN
    });

    try {
        const res = await api.post('/login');
        //Success
        dispatch ({
            type: LOGIN_SUCCESS,
            token: res.data.auth_token        
        })
    } catch (err) {
        console.log(err);
        //Error
        dispatch({
            type: LOGIN_FAILURE,
            error: 'Error Fetching Data'
        })
    }
}


//This action is used to fetch the client list
export const fetch_clients = () => async (dispatch) => {
    dispatch({ type: FETCH_CLIENTS_BEGIN });
    const res = await api.get('/dashboards/clients');
    const total_clients = res.data.total_clients;
    return dispatch({
        type: FETCH_CLIENTS_SUCCESS, payload: { total_clients }
    });
}


//This action is used to fetch the metadata for the charts
export const render_chart = () => async (dispatch) => {
    //Loading
    dispatch({
        type: FETCH_CLIENTS_METADATA_BEGIN
    });

    try {
        const res = await api.get('/dashboards/clients');
        //Success
        dispatch ({
            type: FETCH_CLIENTS_METADATA_SUCCESS,
            payload: res.data        
        })
    } catch (err) {
        console.log(err);
        //Error
        dispatch({
            type: FETCH_CLIENTS_METADATA_FAILURE,
            error: 'Error Fetching Data'
        })
    }
}