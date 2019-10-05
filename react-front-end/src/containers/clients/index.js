import React, { Component, useEffect, useState } from 'react';
import Clients from '../../components/clientList/index';
import CreateClient from '../../components/createclient/index';

const ClientPage = () => {
    const [clients, setClients] = useState([]);
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        fetch('/clients').then(response => response.json().then(data => {
        setClients(data.clients)
        console.log(data.clients)
        }))
    }, []);


        return (
            <div>
            
            <Clients clients={clients}></Clients>
            </div>
            
        )
} 

export default ClientPage;