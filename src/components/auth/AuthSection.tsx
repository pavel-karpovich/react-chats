import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './AuthSection.scss';
import AuthMethods from './AuthMethods';

const AuthSection: React.FC = function() {
  return (
    <Container fluid className="h-100 auth-sec">
      <Row className="d-flex align-items-center justify-content-center">
        <AuthMethods></AuthMethods>
      </Row>
    </Container>
  );
};

export default AuthSection;
