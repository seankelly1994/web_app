import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroup';


const Clients = ({clients}) => {
    
    return (
        <ListGroup>
        {
            clients.map(client => {
                return (
                    <ListGroup.Item key={client.id}>
                        {client.first_name} {client.last_name} {client.business_phone} {client.email_address}
                    </ListGroup.Item>
                );
            })
        }
        </ListGroup>
    );
}

export default Clients;