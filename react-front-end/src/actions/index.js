import { INCREMENT, DECREMENT, DISPLAY } from '../actions/types';

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

export const display = () => {
    return {
        type: DISPLAY
    }
}