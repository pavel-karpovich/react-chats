import { ActionTypes } from './actionTypes';
import * as Firebase from 'firebase/app';
import 'firebase/auth';
import { Dispatch } from 'redux';

function openAuthPopup() {
  return {
    type: ActionTypes.AUTH_EXTERNAL_POPUP,
  } as const;
}

function authFailed(error: string) {
  return {
    type: ActionTypes.AUTH_UNSUCCESSFUL,
    error,
  } as const;
}

function authCommit(username: string) {
  return {
    type: ActionTypes.AUTH_SUCCESSFUL,
    username,
  } as const;
}

export function simpleSignUp(name: string, email: string, password: string) {
  return async (dispatch: Dispatch<any>) => {
    try {
      const result = await Firebase.auth().createUserWithEmailAndPassword(email, password);
      if (result.user) {
        await result.user.updateProfile({ displayName: name });
        const token = await result.user.getIdToken();
        console.log(token);
      }
      const user = result.user;
      console.log(user);
      dispatch(authCommit((user && user.displayName) || 'User'));
    } catch (error) {
      console.log(error);
      dispatch(authFailed(error.message));
    }
  };
}

export function authWithGithub() {
  return async (dispatch: Dispatch<any>) => {
    dispatch(openAuthPopup());
    const provider = new Firebase.auth.GithubAuthProvider();
    try {
      const result = await Firebase.auth().signInWithPopup(provider);
      if (result.user) {
        const token = await result.user.getIdToken();
        console.log(token);
      }
      const user = result.user;
      console.log(user);
      dispatch(authCommit((user && user.displayName) || 'Githuber'));
    } catch (error) {
      console.log(error);
      dispatch(authFailed(error.message));
    }
  };
}

export function authWithGoogle() {
  return async (dispatch: Dispatch<any>) => {
    dispatch(openAuthPopup());
    const provider = new Firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      login_hint: 'user@example.com',
    });
    try {
      const result = await Firebase.auth().signInWithPopup(provider);
      if (result.user) {
        const token = await result.user.getIdToken();
        console.log(token);
      }
      const user = result.user;
      console.log(user);
      dispatch(authCommit((user && user.displayName) || 'Facebooker'));
    } catch (error) {
      console.log(error);
      dispatch(authFailed(error.message));
    }
  };
}

export function authWithFacebook() {
  return async (dispatch: Dispatch<any>) => {
    dispatch(openAuthPopup());
    const provider = new Firebase.auth.FacebookAuthProvider();
    try {
      const result = await Firebase.auth().signInWithPopup(provider);
      if (result.user) {
        const token = await result.user.getIdToken();
        console.log(token);
      }
      const user = result.user;
      console.log(user);
      dispatch(authCommit((user && user.displayName) || 'Facebooker'));
    } catch (error) {
      console.log(error);
      dispatch(authFailed(error.message));
    }
  };
}

export function logIn() {
  return {
    type: ActionTypes.LOGIN,
  } as const;
}

export function logOut() {
  return {
    type: ActionTypes.LOGOUT,
  } as const;
}

export type SomeAuthAction = ReturnType<
  typeof openAuthPopup |
  typeof authFailed |
  typeof authCommit |
  typeof logIn |
  typeof logOut
>
