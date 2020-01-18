import {User} from './interface';
import {Actions} from '../actions';
import {getType} from 'typesafe-actions';
import {saveUserRequest} from './actions';

export interface UserState {
  user: User | null;
}

const initialState = {
  user: null,
};

export const userReducer = (
  state: UserState = initialState,
  action: Actions,
): UserState => {
  switch (action.type) {
    case getType(saveUserRequest):
      return {...state, user: action.payload};
    default:
      return state;
  }
};
