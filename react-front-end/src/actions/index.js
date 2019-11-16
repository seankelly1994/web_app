import { ADD_ARTICLE } from '../actions/types';

const addArticle = (payload) => {
    return {type: ADD_ARTICLE, payload}
};