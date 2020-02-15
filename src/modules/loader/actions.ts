import {ActionType, createAction} from 'typesafe-actions';

import {LoaderKey} from './reducer';

export const apiCallStart = createAction(
  'API_CALL_START',
  action => (name: LoaderKey) => action({}, {name}),
);

export const apiCallSuccess = createAction(
  'API_CALL_SUCCESS',
  action => (name: LoaderKey) => action({}, {name}),
);

export const apiCallError = createAction(
  'API_CALL_ERROR',
  action => (name: LoaderKey, requestError: Error) =>
    action({requestError}, {name}),
);

export type LoaderActions = ActionType<
  typeof apiCallStart | typeof apiCallError | typeof apiCallSuccess
>;
