import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { isUserLogIn } from '../store/selectors';
import useBlur from '../hooks/useBlurBackground';
import Header from '../components/Header';
import InterlocutorsTemplate from '../components/interlocutors/InterlocutorsTemplate';
import ChatTemplate from '../components/chat/ChatTemplate';
import AuthSection from '../components/auth/AuthSection';
import styles from './Index.module.scss';

const Index: React.FC = function() {
  const contRef = React.useRef(null);
  const userLogIn = useSelector(isUserLogIn);
  useBlur(!userLogIn, contRef);
  return (
    <>
      <Container fluid className="h-100 px-0 d-flex flex-column" ref={contRef}>
        <Row noGutters className={styles.header}>
          <Header />
        </Row>
        <Row noGutters className="flex-grow-1">
          <Col sm={4}>
            <InterlocutorsTemplate></InterlocutorsTemplate>
          </Col>
          <Col sm={8}>
            <ChatTemplate></ChatTemplate>
          </Col>
        </Row>
      </Container>
      { !userLogIn &&
        <div className={styles.overlayContainer}>
          <div className={styles.column}>
            <AuthSection></AuthSection>
          </div>
        </div>
      }
    </>
  );
};

export default Index;
