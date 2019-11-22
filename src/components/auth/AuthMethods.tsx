import React from 'react';
import AuthButton from './AuthButton';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGooglePlus, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useDispatch } from 'react-redux';
import { logIn, authWithGithub } from '../../store/actions';
import styles from './AuthMethods.module.scss';

const AuthMethods: React.FC = function() {
  const dispatch = useDispatch();
  const clickHandler = () => dispatch(logIn());
  const authViaGithub = () => authWithGithub()(dispatch);
  return (
    <div className={styles.squareBraces}>
      <div className={styles.gasket}>
        <div className={styles.container}>
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
              onClick={clickHandler}
            ></AuthButton>
            <AuthButton
              icon={faFacebook}
              text="Sign in with Facebook"
              className={styles.btnFacebook}
              onClick={clickHandler}
            ></AuthButton>
            <AuthButton
              icon={faTwitter}
              text="Sign in with Twitter"
              className={styles.btnTwitter}
              onClick={clickHandler}
            ></AuthButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthMethods;
