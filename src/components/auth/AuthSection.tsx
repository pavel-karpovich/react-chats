import React from 'react';
import { Container, Row } from 'react-bootstrap';
import AuthMethods from './AuthMethods';
import styles from './AuthSection.module.scss';
import { ReactComponent as LogoSvg } from 'assets/chats.svg';

const AuthSection: React.FC = function() {
  return (
    <Container fluid
      className={'h-100 d-flex flex-column align-items-center justify-content-center ' + styles.authSec}
    >
      <Row>
        <LogoSvg width="300px" />
      </Row>
      <Row>
        <h2>LogIn:</h2>
      </Row>
      <Row className="w-100">
        <AuthMethods></AuthMethods>
      </Row>
    </Container>
  );
};

export default AuthSection;
