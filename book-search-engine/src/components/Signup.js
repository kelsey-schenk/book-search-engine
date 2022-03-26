import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const Signup = () => {
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event) => {

    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
    }
}