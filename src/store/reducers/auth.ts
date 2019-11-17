import { IReduxBaseAction, ActionTypes, AuthStatus } from '../constants';

export interface IAuthState {
  authStatus: AuthStatus,
}

const initialState: IAuthState = {
  authStatus: AuthStatus.Unknown,
};

export default function(state = initialState, action: IReduxBaseAction) {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return { authStatus: AuthStatus.LogIn };
    case ActionTypes.LOGOUT:
      return { authStatus: AuthStatus.LogOut };
    default:
      return state;
  }
}
