import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/index';
import { BrowserRouter, Route, Link } from "react-router-dom";
import ClientPage from './containers/clients/index';
import TopNavBar from './components/topNavBar/index';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <TopNavBar></TopNavBar>
          <Sidebar></Sidebar>
          <Route exact path="/clients" component={ClientPage}></Route>
        </div>
    </BrowserRouter>
  );
}

export default App;
