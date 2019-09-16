import React, { useState, useEffect } from 'react';
import './App.css';
import Clients from './components/clients/index';
import Sidebar from './components/sidebar/index';

function App() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch('/clients').then(response => response.json().then(data => {
      setClients(data.clients)
      console.log(data.clients)
    }))
  }, []);

  return (
    <div className="App">
    <Sidebar></Sidebar>
      <Clients clients={clients}></Clients>
    </div>
  );
}

export default App;
