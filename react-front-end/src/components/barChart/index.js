import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import api from '../../utils/api/index';

class BarChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            total_clients: 0,
            chartData: {
                labels: [],
                datasets: [
                    {
                        label: 'Total Clients vs Captured Email Address',
                        data: [],
                        backgroundColor: ['#254e58']
                    }
                ]
            }
        }
    }

    //Function to call the data for bar chart from api
    componentDidMount() {
        this.setChartData();
        console.log("Chart Function Called");
    }
    
    //Prepare chart data
    setChartData() {
        const { total_clients } = this.state;

        api.get('/dashboards/clients').then(res => {
            this.setState({total_clients: res.data.total_clients});
        });

        this.setState({
            chartData: {
                labels: ['Total Clients'],
                datasets: [
                    {
                        label: 'Total Clients vs Captured Email Address',
                        data: [total_clients],
                        backgroundColor: ['#254e58']
                    }
                ]
            }
        })
    }

    render() {
        const { total_clients } = this.state;

        console.log("Chart Rendered");
        
        return (
            <div className="BarChart">
                <Bar data={this.state.chartData}/>
                <p>Total Clients: {total_clients}</p>
            </div>
        )
    }
}

export default BarChart;