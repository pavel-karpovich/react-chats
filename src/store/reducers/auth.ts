import { ActionTypes } from '../actionTypes';
import { SomeAuthAction } from '../actions'; 

export type AuthState = {
  readonly initialized: boolean,
  readonly popup: boolean,
  readonly error: string | null,
  readonly user: {
    readonly uid: string,
    readonly email: string,
    readonly name: string | null,
    readonly pictureUrl: string | null,
  } | null,
};

const initialState: AuthState = {
  initialized: false,
  popup: false,
  error: null,
  user: null,
};

export default function(state = initialState, action: SomeAuthAction) {
  switch (action.type) {
    case ActionTypes.AUTH_EXTERNAL_POPUP:
      return { ...state, popup: true };
    case ActionTypes.AUTH_UNSUCCESSFUL:
      return { 
        ...state,
        initialized: true,
        popup: false,
        error: action.error,
        user: null,
      };
    case ActionTypes.AUTH_SUCCESSFUL:
      return {
        ...state,
        initialized: true,
        popup: false,
        error: null,
        user: {
          uid: action.uid,
          email: action.email,
          name: action.username,
          pictureUrl: action.pictureUrl,
        }
      };
    case ActionTypes.LOGOUT:
      return {
        ...state,
        initialized: true,
        user: null,
      };
    case ActionTypes.UPDATE_USER_NAME:
      if (state.user) {
        return {
          ...state,
          user: {
            ...state.user,
            name: action.username,
          },
        };
      }
      return state;
    default:
      return state;
  }
}
