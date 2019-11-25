import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Routes from './Routes';
import Sidebar from './components/sidebar/index';
import Footer from './components/footer/index';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
            <div className="App">
              <Sidebar />
              <Routes />
              <Footer/>
            </div>
      </BrowserRouter>
    );
  }
}

export default connect() (App);