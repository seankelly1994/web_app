import React, {Component} from 'react';
import {slide as Menu} from 'react-burger-menu';
import Style from './style.css';

class SideBar extends Component {
    render() {
        return (
            <Menu>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="clients" className="menu-item" href="/clients">Clients</a>
                <a id="dashboards" className="menu-item" href="/dashboards">Dashboards</a>
                <a id="billing" className="menu-item" href="/billing">Billing</a>
            </Menu>
        )
    }
}

export default SideBar;