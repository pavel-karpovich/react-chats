import React from 'react';
import AuthButton from './AuthButton';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { useDispatch } from 'react-redux';
import { logIn } from '../../store/actions';
import './AuthMethods.scss';

const AuthMethods = function() {
  const dispatch = useDispatch();
  const clickHandler = () => dispatch(logIn());
  return (
    <div className="square-braces">
      <div>
        <AuthButton 
          icon={faEnvelope}
          text="Sign In with Email"
          className="btn-email"
          onClick={clickHandler}
          ></AuthButton>
        <AuthButton
          icon={faGithub}
          text="Sign in with GitHub"
          className="btn-github"
          onClick={clickHandler}
        ></AuthButton>
        <AuthButton
          icon={faGooglePlus}
          text="Sign in with Google"
          className="btn-google"
          onClick={clickHandler}
        ></AuthButton>
      </div>
    </div>
  );
};

export default AuthMethods;
