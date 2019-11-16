import React, { Component } from 'react';
import Counter from '../../components/billing/index';
import { connect } from 'react-redux';

class Billing extends Component {
    state = {
        count: 0
    }

    render() {
        return (
            <Counter value={this.props.ctr} />
        )
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.count
    };
};

export default connect(mapStateToProps)(Billing);