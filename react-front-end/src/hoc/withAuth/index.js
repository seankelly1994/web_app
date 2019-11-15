import React from 'react';
import { Redirect } from 'react-router-dom';

const withAuth = (WrappedComponent, redirect = false, anonymous = true) => {
    return class extends React.Component {
        getToken() {
            return localStorage.getItem('token');
        }

        render() {
            const token = this.getToken();

            if (redirect && !token) {
                return <Redirect to='/login' />;
            }

            if(!anonymous && token) {
                return <Redirect to='/dashboards' />;
            }
            // ... and renders the wrapped component with the fresh data!
            // Notice that we pass through any additional props
            return <WrappedComponent isLoggedIn={Boolean(token)} {...this.props} />;
        }
    };
};

export default withAuth;