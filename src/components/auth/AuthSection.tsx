import React from 'react';
import { Container, Row } from 'react-bootstrap';
import AuthMethods from './AuthMethods';
import styles from './AuthSection.module.scss';

const AuthSection: React.FC = function() {
  return (
    <Container fluid className={'h-100 d-flex align-items-center justify-content-center ' + styles.authSec}>
      <Row className="w-100">
        <AuthMethods></AuthMethods>
      </Row>
    </Container>
  );
};

export default AuthSection;
