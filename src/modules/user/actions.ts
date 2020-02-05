import {createAction, ActionType} from 'typesafe-actions';
import {User, DictationEvent} from './interface';

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

const UPDATE_DICTATIONS_HISTORY_REQUEST = 'UPDATE_DICTATIONS_HISTORY_REQUEST';
export const updateDictationsHistoryRequest = createAction(
  UPDATE_DICTATIONS_HISTORY_REQUEST,
  action => (dictationEvent: DictationEvent) => action(dictationEvent),
);

const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const updateUserRequest = createAction(
  UPDATE_USER_REQUEST,
  action => (user: User | null) => action(user),
);

const SAVE_DICTATION_EVENT_ACTION = 'SAVE_DICTATION_EVENT_ACTION';
export const saveDictationEventAction = createAction(
  SAVE_DICTATION_EVENT_ACTION,
  action => (dictationEvent: DictationEvent) => action(dictationEvent),
);

export type UserActions = ActionType<
  | typeof saveUserRequest
  | typeof saveDictationEventAction
  | typeof userSignupRequest
  | typeof userLoginRequest
  | typeof updateDictationsHistoryRequest
  | typeof updateUserRequest
>;
