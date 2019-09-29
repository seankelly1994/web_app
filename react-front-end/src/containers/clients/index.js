import React, { Component, useEffect, useState } from 'react';
import Clients from '../../components/clientList/index';

const ClientPage = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        fetch('/clients').then(response => response.json().then(data => {
        setClients(data.clients)
        console.log(data.clients)
        }))
    }, []);


        return (
            <Clients clients={clients}></Clients>
        )
}

export default ClientPage;