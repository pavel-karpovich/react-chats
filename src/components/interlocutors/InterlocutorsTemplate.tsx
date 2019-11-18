import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './InterlocutorsTemplate.scss';

const InterlocutorsTemplate: React.FC = function() {
  return (
    <Container fluid className="h-100 px-0 d-flex flex-column">
      <Row noGutters className="search-box mx-0"></Row>
      <Row noGutters className="interlocutors mx-0 flex-grow-1"></Row>
      <Row noGutters className="control-panel mx-0"></Row>
    </Container>
  );
};

export default InterlocutorsTemplate;
