import {User, RawUser} from './interface';

export const adaptUserToSave = (user: User): RawUser => {
  console.log('in adapter', user);
  return {...user};
};

export const adaptUser = (rawUser: RawUser): User => {
  return {...rawUser, name: rawUser.name || 'Inconnu'};
};
