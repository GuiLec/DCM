import {combineReducers} from 'redux';
import {DictationState, dictationReducer} from './dictation/reducer';
import {userReducer, UserState} from './user/reducer';

export interface RootReducer {
  dictation: DictationState;
  userState: UserState;
}

export const rootReducer = combineReducers<RootReducer>({
  dictation: dictationReducer,
  userState: userReducer,
});
