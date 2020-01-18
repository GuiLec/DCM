import {RootReducer} from '../rootReducer';
import {User} from './interface';

export const selectUser = (state: RootReducer): User | null =>
  state.userState.user;
