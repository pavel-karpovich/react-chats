import { AppState } from './reducers';

export const isUserLogIn = (store: AppState) => 
  store.auth.user !== null;

export const getUserData = (store: AppState) =>
  ({ ...store.auth.user });

export const getUserName = (store: AppState) =>
  store.auth.user && store.auth.user.name;

export const getUserPictureUrl = (store: AppState) =>
  store.auth.user && store.auth.user.pictureUrl;
