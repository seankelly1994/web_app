import React, { Component, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CreateClient extends Component () {
    constructor(props) {
        super(props);

        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [emailAddress, setEmailAddress] = useState('');
        const [businessPhone, setBusinessPhone] = useState('');
    }
    
}

export default CreateClient;