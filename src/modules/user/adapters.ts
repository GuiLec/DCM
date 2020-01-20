import {User, RawUser} from './interface';

export const adaptUserToSave = (user: User): RawUser => {
  return {...user};
};

export const adaptUser = (user: RawUser): User => {
  return {...user};
};
