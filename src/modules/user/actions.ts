import {createAction, ActionType} from 'typesafe-actions';
import {User} from './interface';

const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const userLoginRequest = createAction(
  USER_LOGIN_REQUEST,
  action => (id: string) => action(id),
);

const USER_SIGNUP_REQUEST = 'USER_SIGNUP_REQUEST';
export const userSignupRequest = createAction(
  USER_SIGNUP_REQUEST,
  action => (user: User) => action(user),
);

const SAVE_USER_REQUEST = 'SAVE_USER_REQUEST';
export const saveUserRequest = createAction(
  SAVE_USER_REQUEST,
  action => (user: User | null) => action(user),
);

export type UserActions = ActionType<typeof saveUserRequest>;
