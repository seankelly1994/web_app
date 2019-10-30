import React, { Component } from 'react';
import Login from '../../components/login/index';
import { Redirect } from 'react-router-dom';

const Auth = (props) => {

if (props.isAuthenticated()) {
    return <Redirect to ='/dashboards'></Redirect>;
}
    return (
        <Login></Login>
    )

}

export default Auth;