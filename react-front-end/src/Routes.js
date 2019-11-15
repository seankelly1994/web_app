import React from 'react';
import withAuth from './hoc/withAuth';
import { Route, Switch } from "react-router-dom";
import ClientPage from './containers/clients/index';
import Auth from './containers/auth/index';
import Register from './components/register/index';
import Dashboards from '../src/containers/dashboards/index';
import Billing from './containers/billing/index';

const NotFoundPage = () => (
    <h1>404 - Not Found</h1>
  )  

const Routes = () => {

    return (
        <Switch>
            <Route exact path='/' component={withAuth(Dashboards, true)} />
            <Route exact path='/dashboards' component={withAuth(Dashboards, true)}></Route>
            <Route exact path='/login' component={withAuth(Auth, false, false)} />
            <Route exact path="/clients" component={withAuth(ClientPage, true)}></Route>
            <Route exact path="/billing" component={withAuth(Billing, true)}></Route>
            <Route exact path='/register' component={Register} />
            <Route path='*' component={NotFoundPage} />
        </Switch>
    )
}

export default Routes;