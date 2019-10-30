import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar/index';
import { BrowserRouter, Route } from "react-router-dom";
import ClientPage from './containers/clients/index';
import Auth from './containers/auth/index';
import Register from './components/register/index';
import Header from './components/header/index';


class App extends Component {
  constructor(props) {
    super(props);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  isAuthenticated() {
    if(window.localStorage.getItem('authToken')) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <BrowserRouter>
          <div className="App">
          <Sidebar></Sidebar>
          <Header></Header>
          <Route exact path='/register' render={() => (
            <Register
              isAuthenticated={this.isAuthenticated}
            />
          )} />
          <Route exact path='/auth' render={() => (
            <Auth
              isAuthenticated={this.isAuthenticated}
            />
          )} />
          <Route exact path="/clients" component={ClientPage}></Route>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;