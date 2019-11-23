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

export function authCommit(email: string, username: string | null, pictureUrl: string | null) {
  return {
    type: ActionTypes.AUTH_SUCCESSFUL,
    email,
    username,
    pictureUrl,
  } as const;
}

export function logoutCommit() {
  return {
    type: ActionTypes.LOGOUT,
  } as const;
}

export function logout() {
  return () => {
    Firebase.auth().signOut();
  };
}

export function simpleSignUp(name: string, email: string, password: string) {
  return async (dispatch: Dispatch<any>) => {
    try {
      const result = await Firebase.auth().createUserWithEmailAndPassword(email, password);
      if (result.user) {
        await result.user.updateProfile({ displayName: name });
      }
    } catch (error) {
      console.log(error);
      dispatch(authFailed(error.message));
    }
  };
}

export function authWithGithub() {
  return (dispatch: Dispatch<any>) => {
    dispatch(openAuthPopup());
    const provider = new Firebase.auth.GithubAuthProvider();
    try {
      Firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.log(error);
      dispatch(authFailed(error.message));
    }
  };
}

export function authWithGoogle() {
  return (dispatch: Dispatch<any>) => {
    dispatch(openAuthPopup());
    const provider = new Firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      login_hint: 'user@example.com',
    });
    try {
      Firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.log(error);
      dispatch(authFailed(error.message));
    }
  };
}

export function authWithFacebook() {
  return (dispatch: Dispatch<any>) => {
    dispatch(openAuthPopup());
    const provider = new Firebase.auth.FacebookAuthProvider();
    try {
      Firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.log(error);
      dispatch(authFailed(error.message));
    }
  };
}

export type SomeAuthAction = ReturnType<
  typeof openAuthPopup |
  typeof authFailed |
  typeof authCommit |
  typeof logoutCommit
>
