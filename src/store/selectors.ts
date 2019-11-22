import { AppState } from './reducers';
import { AuthStatus } from './actionTypes';

export const isUserLogIn = (store: AppState) =>
  store.auth.authStatus === AuthStatus.LogIn;
