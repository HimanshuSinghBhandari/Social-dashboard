// components/LoginForm.js
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './LoginForm.css';
import { login } from './AuthenticationService';

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    login(email, password)
      .then(() => onLogin())
      .catch(error => console.error('Login failed:', error));
  }

  return (
    <div className="center">
      <div className="form-container"> 
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
      </div>
      <div className="predefined-login">
        <h5>Predefined Logins , You can login with this:</h5>
        <ul>
          <li>
            <span>Email:</span> dogsarebeautiful7@gmail.com
          </li>
          <li>
            <span>Password:</span> 12345678
          </li>
          {/* Add more predefined login options as needed */}
        </ul>
      </div>
    </div>
    
  );
}

export default LoginForm;
