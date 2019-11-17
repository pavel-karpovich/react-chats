

export enum ActionTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}

export interface IReduxBaseAction {
  type: ActionTypes,
}

export enum AuthStatus {
  LogIn,
  LogOut,
  Unknown,
}
