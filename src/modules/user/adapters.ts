import {User, RawUser} from './interface';
import {defaultAppLanguage} from '../../environment/app';

export const adaptUserToSave = (user: User): RawUser => {
  return {...user};
};

export const adaptUser = (rawUser: RawUser): User => {
  return {
    ...rawUser,
    name: rawUser.name || 'Inconnu',
    dictationsHistory: rawUser.dictationsHistory || [],
    dictationsDifficulties: [1, 2, 3, 4],
    selectedLanguage: defaultAppLanguage,
  };
};
