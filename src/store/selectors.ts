import { AppState } from './reducers';

export const isUserLogIn = (store: AppState) => 
  store.auth.user !== null;

export const getUser = (store: AppState) =>
  ({ ...store.auth.user });
