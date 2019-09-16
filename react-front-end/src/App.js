import React, { useState, useEffect } from 'react';
import './App.css';
import Clients from './components/clients/index';
import Sidebar from './components/sidebar/index';
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch('/clients').then(response => response.json().then(data => {
      setClients(data.clients)
      console.log(data.clients)
    }))
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
      <Sidebar></Sidebar>
      <Route path="/"></Route>
      <Route path="/clients" exact component={Clients}><Clients clients={clients}></Clients></Route>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
