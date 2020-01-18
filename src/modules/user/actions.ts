import {createAction, ActionType} from 'typesafe-actions';
import {User} from './interface';

const SAVE_USER_REQUEST = 'SAVE_USER_REQUEST';
export const saveUserRequest = createAction(
  SAVE_USER_REQUEST,
  action => (user: User | null) => action(user),
);

export type UserActions = ActionType<typeof saveUserRequest>;
