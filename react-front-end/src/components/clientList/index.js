import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

class Clients extends Component {
    constructor(props){
        super(props);

        this.state = {
            clients: []
        };
    }

    componentDidMount() {
        fetch('/clients').then(response => response.json())
        .then(data => this.setState({clients: data.clients}))
    }
    
    render() {
        const { clients } = this.state;

        return (
            <Table responsive>
            <thead>
                <tr>
                    <td></td>
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
                    {clients.map(client => (
                        <tr>
                            <td key={client}>{client.first_name}</td>
                            <td key={client}>{client.last_name}</td>
                            <td key={client}>{client.email_address}</td>
                            <td key={client}>{client.business_phone}</td>
                        </tr>
                    ))}
            </Table>
        )
    }
}

export default Clients;