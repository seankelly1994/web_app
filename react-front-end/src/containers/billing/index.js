import React, { Component } from 'react';
import Counter from '../../components/billing/index';
import { connect } from 'react-redux';

class Billing extends Component {
    state = {
        count: 0
    }

    render() {
        return (
            <div>
            <Counter/>
            <button>Increase</button>
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