import {User, RawUser} from './interface';

export const adaptUserToSave = (user: User): RawUser => {
  return {...user};
};

export const adaptUser = (rawUser: RawUser): User => {
  return {...rawUser, name: rawUser.name || 'Inconnu'};
};
