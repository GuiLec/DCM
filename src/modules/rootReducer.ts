import {combineReducers} from 'redux';
import {DictationState, dictationReducer} from './dictation/reducer';

export interface RootReducer {
  dictation: DictationState;
}

export const rootReducer = combineReducers<RootReducer>({
  dictation: dictationReducer,
});
