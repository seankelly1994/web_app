import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BarChart from '../../components/barChart/index';

class Dashboards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <BarChart></BarChart>
                    </Col>
                    <Col>Dashboard 1</Col>
                </Row>

                <Row>
                    <Col>Dashboard 1</Col>
                    <Col>Dashboard 1</Col>
                </Row>
            </Container>
        )
    }
}

export default Dashboards;