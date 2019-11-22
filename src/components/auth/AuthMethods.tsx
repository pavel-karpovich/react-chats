import React from 'react';
import AuthButton from './AuthButton';
import SquareBracketsContainer from './SquareBracketsContainer';
import { useDispatch } from 'react-redux';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faGooglePlus,
  faFacebook,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  logIn,
  authWithGithub,
  authWithGoogle,
  authWithFacebook,
} from '../../store/actions';
import styles from './AuthMethods.module.scss';

const AuthMethods: React.FC = function() {
  const dispatch = useDispatch();
  const clickHandler = () => dispatch(logIn());
  const authViaGithub = () => authWithGithub()(dispatch);
  const authViaGoogle = () => authWithGoogle()(dispatch);
  const authViaFacebook = () => authWithFacebook()(dispatch);
  return (
    <SquareBracketsContainer>
      <div className={styles.buttons}>
        <AuthButton 
          icon={faEnvelope}
          text="Sign In with Email"
          className={styles.btnEmail}
          onClick={clickHandler}
          ></AuthButton>
        <AuthButton
          icon={faGithub}
          text="Sign in with GitHub"
          className={styles.btnGithub}
          onClick={authViaGithub}
        ></AuthButton>
        <AuthButton
          icon={faGooglePlus}
          text="Sign in with Google"
          className={styles.btnGoogle}
          onClick={authViaGoogle}
        ></AuthButton>
        <AuthButton
          icon={faFacebook}
          text="Sign in with Facebook"
          className={styles.btnFacebook}
          onClick={authViaFacebook}
        ></AuthButton>
        <AuthButton
          icon={faTwitter}
          text="Sign in with Twitter"
          className={styles.btnTwitter}
          onClick={clickHandler}
        ></AuthButton>
      </div>
    </SquareBracketsContainer>
  );
};

export default AuthMethods;
