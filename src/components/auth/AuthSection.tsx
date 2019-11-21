import React from 'react';
import { Container, Row } from 'react-bootstrap';
import AuthMethods from './AuthMethods';
import StackReferences from './StackReferences';
import styles from './AuthSection.module.scss';
import { ReactComponent as LogoSvg } from 'assets/chats.svg';

const AuthSection: React.FC = function() {
  return (
    <Container fluid
      className={'h-100 d-flex flex-column align-items-center ' + styles.authSec}
    >
      <Row className="mt-5">
        <LogoSvg width="300px" />
      </Row>
      <Row className="w-100 px-2 px-sm-5 my-5 justify-content-center">
        <h2>LogIn:</h2>
        <AuthMethods />
      </Row>
      <Row className="pb-5 mt-auto">
        <StackReferences />
      </Row>
    </Container>
  );
};

export default AuthSection;
