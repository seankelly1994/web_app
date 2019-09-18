import React from 'react';
import {useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


const Clients = ({clients}) => {
    return (
        <Table responsive>
            <thead>
                <tr>
                    <td>Search</td>
                    <td></td>
                    <td></td>
                    <td>
                        <Button>Create</Button>
                    </td>
                </tr>
                <tr>
                    <th>First Name</th>
                    <th>last Name</th>
                    <th>Business Phone</th>
                    <th>Email Address</th>
                </tr>
            </thead>
            <tbody>
                {
                    clients.map(client => {
                        return (
                            <tr>
                                <td>{client.first_name}</td>
                                <td>{client.last_name}</td>
                                <td>{client.business_phone}</td>
                                <td>{client.email_address}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}

export default Clients;