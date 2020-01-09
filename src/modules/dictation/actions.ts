import {createAction, ActionType} from 'typesafe-actions';
import {Dictation} from './interface';

const SAVE_DICTATION = 'SAVE_DICTATION';
export const saveDictationRequest = createAction(
  SAVE_DICTATION,
  action => (dictation: Dictation) => action(dictation),
);

export type DictationsActions = ActionType<typeof saveDictationRequest>;
