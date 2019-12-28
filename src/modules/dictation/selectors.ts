import {RootReducer} from '../rootReducer';
import {Dictation} from './interface';

export const selectDictations = (state: RootReducer): Dictation[] =>
  state.dictation.dictations;
