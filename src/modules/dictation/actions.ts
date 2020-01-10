import {createAction, ActionType} from 'typesafe-actions';
import {Dictation} from './interface';

const SAVE_DICTATIONS_REQUEST = 'SAVE_DICTATIONS_REQUEST';
export const saveDictationsRequest = createAction(
  SAVE_DICTATIONS_REQUEST,
  action => (dictation: Dictation[]) => action(dictation),
);

const FETCH_DICTATION_REQUEST = 'SAVE_DICTATION';
export const fetchDictationsRequest = createAction(FETCH_DICTATION_REQUEST);

export type DictationsActions = ActionType<typeof saveDictationsRequest>;
