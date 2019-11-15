import { ADD_ARTICLE } from '../actions/types';

export function addArticle(payload) {
    return {type: ADD_ARTICLE, payload}
};