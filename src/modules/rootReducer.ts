import {combineReducers} from 'redux';
import {DictationState, dictationReducer} from './dictation/reducer';
import {userReducer, UserState} from './user/reducer';
import {LoaderState, loaderReducer} from './loader/reducer';

export interface RootReducer {
  dictation: DictationState;
  userState: UserState;
  loader: LoaderState;
}

export const rootReducer = combineReducers<RootReducer>({
  dictation: dictationReducer,
  userState: userReducer,
  loader: loaderReducer,
});
