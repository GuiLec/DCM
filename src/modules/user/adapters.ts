import {User, RawUser} from './interface';
import {defaultAppLanguage, defaultDifficulties} from '../../environment/app';

export const adaptUserToSave = (user: User): RawUser => {
  return {...user};
};

export const adaptUser = (rawUser: RawUser): User => {
  return {
    ...rawUser,
    name: rawUser.name || 'Inconnu',
    dictationsHistory: rawUser.dictationsHistory || [],
    dictationsDifficulties:
      rawUser.dictationsDifficulties || defaultDifficulties,
    selectedLanguage: rawUser.selectedLanguage || defaultAppLanguage,
  };
};
