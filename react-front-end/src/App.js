import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/index';
import { BrowserRouter, Route } from "react-router-dom";
import ClientPage from './containers/clients/index';
import Auth from './containers/auth/index';
import Register from './components/register/index';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Sidebar></Sidebar>
          <Route exact path="/auth" component={Auth}></Route>
          <Route exact path="/clients" component={ClientPage}></Route>
          <Route exact path="/register" component={Register}></Route>
        </div>
    </BrowserRouter>
  );
}

export default App;
