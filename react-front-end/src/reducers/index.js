import react from 'react';
import { ADD_ARTICLE } from '../actions/types';

const initialState = {
    count: 5
}

const rootReducer = (state = initialState, action) => {
    if (action.type === ADD_ARTICLE) {
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      });
    }
    return state;
}

export default rootReducer;

