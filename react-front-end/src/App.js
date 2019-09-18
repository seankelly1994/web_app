import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/sidebar/index';
import { BrowserRouter, Route, Link } from "react-router-dom";
import ClientPage from './containers/clientPage/index';

function App() {

  return (
      <BrowserRouter>
        <div className="App">
        <Sidebar></Sidebar>
        <Route exact path="/clients" component={ClientPage}></Route>
        </div>
      </BrowserRouter>

  );
}

export default App;
