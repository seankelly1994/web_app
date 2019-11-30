import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from '../../components/counter/index';

class Billing extends Component {

    render() {
        return (
            <div>
            <Counter></Counter>
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.count
    };
};

export default connect(mapStateToProps)(Billing);