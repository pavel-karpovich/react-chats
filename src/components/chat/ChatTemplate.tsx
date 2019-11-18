import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './ChatTemplate.scss';

const ChatTemplate: React.FC = function() {
  return (
    <Container fluid className="h-100 px-0 d-flex flex-column">
      <Row noGutters className="info-bar"></Row>
      <Row noGutters className="chat-feed flex-grow-1"></Row>
      <Row noGutters className="write-message-block"></Row>
    </Container>
  );
};

export default ChatTemplate;
