import {Dictation} from './interface';
import {mockedDictations} from './mockedData';
import {Actions} from '../actions';
import {getType} from 'typesafe-actions';
import {saveDictationRequest} from './actions';

export interface DictationState {
  dictations: Dictation[];
}

const initialState = {
  dictations: mockedDictations,
};

export const dictationReducer = (
  state: DictationState = initialState,
  action: Actions,
): DictationState => {
  switch (action.type) {
    case getType(saveDictationRequest):
      return {...state, dictations: [...state.dictations, action.payload]};
    default:
      return state;
  }
};
