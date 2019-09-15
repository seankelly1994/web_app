import React, { useState, useEffect } from 'react';
import './App.css';
import Clients from './components/clients';

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
      <Clients clients={clients}></Clients>
    </div>
  );
}

export default App;
