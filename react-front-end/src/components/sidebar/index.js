import React, {Component} from 'react';
import {slide as Menu} from 'react-burger-menu';
import withAuth from '../../hoc/withAuth';
import './style.css';

class SideBar extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.isLoggedIn ? (
                    <Menu>
                        <a id="home" className="menu-item" href="/">Home</a>
                        <a id="clients" className="menu-item" href="/clients">Clients</a>
                        <a id="dashboards" className="menu-item" href="/dashboards">Dashboards</a>
                        <a id="billing" className="menu-item" href="/billing">Billing</a>
                        <a id="login" className="menu-item" href="/logout">Logout</a>
                    </Menu>
                ) : (
                    <Menu>
                        <a id="login" className="menu-item" href="/login">Login</a>
                        <a id="register" className="menu-item" href="/register">Sign Up</a>
                    </Menu>
                )}
            </React.Fragment>
        )
    }
}

export default withAuth(SideBar);