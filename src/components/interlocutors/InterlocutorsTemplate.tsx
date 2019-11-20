import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styles from './InterlocutorsTemplate.module.scss';

const InterlocutorsTemplate: React.FC = function() {
  return (
    <Container fluid className="h-100 px-0 d-flex flex-column">
      <Row noGutters className={'mx-0 ' + styles.searchBox}></Row>
      <Row noGutters className={'mx-0 flex-grow-1 ' + styles.interlocutors}></Row>
      <Row noGutters className={'mx-0 ' + styles.controlPanel}></Row>
    </Container>
  );
};

export default InterlocutorsTemplate;
