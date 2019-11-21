import React from 'react';
import { ReactComponent as ReactLogo } from 'assets/react_logo.svg';
import { ReactComponent as FirebaseLogo } from 'assets/firebase_logo.svg';
import { Container, Row } from 'react-bootstrap';
import styles from './StackReferences.module.scss';

const StackReferences = function() {
  return (
    <Container className={styles.stack}>
      <Row>Developed with:</Row>
      <Row className="align-items-center justify-content-center">
        <FirebaseLogo className={styles.icon} />
        <span>Firebase</span>
      </Row>
      <Row className="align-items-center justify-content-center">
        <ReactLogo className={styles.icon} />
        <span>React</span>
      </Row>
    </Container>
  );
};

export default StackReferences;
