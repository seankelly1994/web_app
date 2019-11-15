import React from 'react';
import { connect } from 'react-redux';

const Counter = (props) => {
    return (
        <div>
            <h1>Counter</h1>
            <p>Count: {props.count}</p>
            <button>Increment</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log("mapStateToProps", state);
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(Counter);