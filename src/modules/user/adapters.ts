import {User, RawUser} from './interface';

export const adaptUserToSave = (user: User): RawUser => {
  return {...user};
};

export const adaptUser = (rawUser: RawUser): User => {
  return {
    ...rawUser,
    name: rawUser.name || 'Inconnu',
    dictationsHistory: [
      {
        id: '1',
        dictationName: 'Ma première dictée',
        score: '03/20',
      },
      {
        id: '2',
        dictationName: 'Ma seconde dictée',
        score: '20/20',
      },
    ],
  };
};
