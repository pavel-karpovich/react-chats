import { AppState } from './reducers';
import { AuthStatus } from './constants';

export const isUserLogIn = (store: AppState) =>
  store.auth.authStatus === AuthStatus.LogIn;
