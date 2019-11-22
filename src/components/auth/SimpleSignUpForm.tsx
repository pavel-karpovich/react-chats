import React, { useState } from 'react';
import { Form, Button, FormControlProps } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { simpleSignUp } from 'store/actions';
import styles from './SimpleSignUpForm.module.scss';

const SimpleSignUpForm: React.FC = function() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isUserAgrees, setUserAgrees] = useState(false);
  const inputName = (e: React.FormEvent<FormControlProps>) => {
    setName(e.currentTarget.value as string);
  };
  const inputEmail = (e: React.FormEvent<FormControlProps>) => {
    setEmail(e.currentTarget.value as string);
  };
  const inputPassword = (e: React.FormEvent<FormControlProps>) => {
    setPassword(e.currentTarget.value as string);
  };
  const toggleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAgrees(e.target.checked);
  };
  const register = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isUserAgrees) {
      simpleSignUp(name, email, password)(dispatch);
    }
  };
  const areAllFieldsSet = () => {
    return (name !== '' && email !== '' && password !== '' && isUserAgrees);
  };
  return (
    <Form>
      <Form.Group>
        <Form.Label>Visible name</Form.Label>
        <Form.Control
          type="text" placeholder="Your name"
          value={name} onChange={inputName}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email" placeholder="Enter email"
          value={email} onChange={inputEmail}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password" placeholder="password"
          value={password} onChange={inputPassword}
        />
      </Form.Group>
      <Form.Group>
        <Form.Check
          type="checkbox"
          checked={isUserAgrees} onChange={toggleCheckbox} 
          label="I confirm I understand that this chat app is a demo"
        />
      </Form.Group>
      <Button
        type="submit" variant="primary"
        disabled={!areAllFieldsSet()} onClick={register}
      >
        Register
      </Button>
    </Form>
  );
}

export default SimpleSignUpForm;
