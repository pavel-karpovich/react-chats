import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styles from'./ChatTemplate.module.scss';

const ChatTemplate: React.FC = function() {
  return (
    <Container fluid className="h-100 px-0 d-flex flex-column">
      <Row noGutters className={styles.infoBar}></Row>
      <Row noGutters className={'flex-grow-1 ' + styles.chatFeed}></Row>
      <Row noGutters className={styles.writeMessageBlock}></Row>
    </Container>
  );
};

export default ChatTemplate;
