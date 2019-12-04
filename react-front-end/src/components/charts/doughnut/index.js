import React, { Component } from 'react';
import { fetch_clients, render_chart } from '../../../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from '../../../../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';
import { Doughnut } from 'react-chartjs-2';
import Spinner from 'react-bootstrap/Spinner';
import './style.css';

//Function for correct display of chart data
const getChartData = (data) => {

    return {
        labels: ['Total Clients', 'Total Emails'],
        datasets: [
            {
                data: [data.total_clients, data.total_emails],
                backgroundColor: ['#254e58', '#254e23']
            },
        ]
    }
}

class Doughnuts extends Component {
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
                <Spinner animation="grow" variant="success"></Spinner>
            )
        }

        if (error) {
            return (
                <div> {error} </div>
            )
        }

        if (data) {
            return (
                <div className="DoughnutChart">
                    <Doughnut data={getChartData(data)}></Doughnut>
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

export default connect(mapStateToProps, mapDispatchToProps)(Doughnuts);