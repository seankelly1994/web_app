import React, { Component, useEffect, useState } from 'react';
import ClientList from '../../components/clientList/index';
import Pagination from 'react-bootstrap/Pagination'

const ClientPage = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        fetch('/clients').then(response => response.json().then(data => {
        setClients(data.clients)
        console.log(data.clients)
        }))
    }, []);


        return (
            <div>
                <ClientList clients={clients}></ClientList>
            </div>
            
        )
} 

export default ClientPage;