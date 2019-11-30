import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../../actions/index';

const Counter = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <div>Count: {counter}</div>
            <button onClick={() => dispatch(increment())}>Increment</button>
        </div>
    )
}

export default Counter;