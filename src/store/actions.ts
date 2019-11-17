import { ActionTypes, IReduxBaseAction } from './constants';

export function logIn(): IReduxBaseAction {
  return {
    type: ActionTypes.LOGIN,
  };
}

export function logOut(): IReduxBaseAction {
  return {
    type: ActionTypes.LOGOUT,
  };
}
