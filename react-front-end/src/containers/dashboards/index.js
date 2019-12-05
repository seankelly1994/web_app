import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import Bar from '../../components/charts/bar/index';
import Doughnuts from '../../components/charts/doughnut/index';
import Pies from '../../components/charts/pie/index';
import VerticalBar from '../../components/charts/verticalBar/index';
import Card from 'react-bootstrap/Card';
import './style.css';

class Dashboards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className="justify-content-md-center">
                <Row className="justify-content-md-center Row">
                    <Col xs={12} md={8} lg={5}>
                        <Card>
                            <Bar></Bar>
                        </Card>
                    </Col>
                    <Col xs={12} md={8} lg={5}>
                        <Card>
                            <Doughnuts></Doughnuts>
                        </Card>
                    </Col>
                </Row>

                <Row className="justify-content-md-center Row">
                    <Col xs={12} md={8} lg={5}>
                        <Card>
                            <Pies></Pies>
                        </Card>
                    </Col>
                    <Col xs={12} md={8} lg={5}>
                        <Card>
                            <VerticalBar></VerticalBar>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.clientsMetaData.data
    };
};

export default connect(mapStateToProps)(Dashboards);