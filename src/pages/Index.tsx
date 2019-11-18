import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { isUserLogIn } from '../store/selectors';
import useBlur from '../hooks/useBlurBackground';
import InterlocutorsTemplate from '../components/interlocutors/InterlocutorsTemplate';
import ChatTemplate from '../components/chat/ChatTemplate';
import AuthSection from '../components/auth/AuthSection';
import './Index.scss';

const Index: React.FC = function() {
  const contRef = React.useRef(null);
  const userLogIn = useSelector(isUserLogIn);
  useBlur(!userLogIn, contRef);
  return (
    <>
      <Container fluid className="h-100 px-0" ref={contRef}>
        <Row noGutters className="h-100">
          <Col sm={4}>
            { userLogIn && 
                <div>User Log In</div>
            }
            {
              !userLogIn &&
                <InterlocutorsTemplate></InterlocutorsTemplate>
            }
          </Col>
          <Col sm={8}>
            { userLogIn && 
                <div>Successful!</div>
            }
            {
              !userLogIn &&
                <ChatTemplate></ChatTemplate>
            }
          </Col>
        </Row>
      </Container>
      { !userLogIn &&
          <div className="overlay-container">
            <div>
              <AuthSection></AuthSection>
            </div>
          </div>
      }
    </>
  );
};

export default Index;
