import React, { Component } from 'react';
import { fetch_clients, render_chart } from '../../../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from '../../../../node_modules/redux';
import { Pie } from 'react-chartjs-2';
import './style.css';

//Function for correct display of chart data
const getChartData = (data) => {

    return {
        datasets: [
            {
                label: 'Total Clients',
                data: [ data.total_clients ],
                backgroundColor: '#254e58'
            },
            {
                label: 'Total Emails',
                data: [ data.total_emails ],
                backgroundColor: '#124e15'
            }
        ]
    }
}

class PieChart extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetch_clients();
        this.props.render_chart();
    }

    render() {
        const { loading, error, data } = this.props;
        if (loading) {
            return (
                <div>Loading ...</div>
            )
        }

        if (error) {
            return (
                <div> {error} </div>
            )
        }

        if (data) {
            return (
                <div className="PieChart">
                    <Pie data={getChartData(data)}></Pie>
                </div>
            )
        }

        return null;
    }
}


const mapStateToProps = state => {
    return {
        loading: state.clientsMetaData.loading,
        error: state.clientsMetaData.error,
        data: state.clientsMetaData.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({ fetch_clients, render_chart }, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PieChart);