import React from 'react';

const Counter = (props) => {
    return (
        <div>
            <h1>Counter</h1>
            <p>Count: {props.value}</p>
            <button>Increment</button>
        </div>
    )
};

export default Counter;