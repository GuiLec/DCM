import {Dictation} from './interface';
import {mockedDictations} from './mockedData';

export interface DictationState {
  dictations: Dictation[];
}

const initialState = {
  dictations: mockedDictations,
};

export const dictationReducer = (
  state: DictationState = initialState,
): DictationState => {
  return state;
};
