import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { logIn } from '../../store/actions';
import './AuthSection.scss';

const AuthSection: React.FC = function() {
  const dispatch = useDispatch();
  return (
    <Container fluid className="h-100 auth-sec">
      <Row className="d-flex align-items-center justify-content-center">
        <Button onClick={() => dispatch(logIn())}>LogIn</Button>
      </Row>
    </Container>
  );
};

export default AuthSection;
