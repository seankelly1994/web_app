import { INCREMENT } from '../actions/types';
import { DECREMENT } from '../actions/types';

const increment = () => {
    return {
        type: INCREMENT
    }
}
const decrement = () => {
    return {
        type: DECREMENT
    }
}