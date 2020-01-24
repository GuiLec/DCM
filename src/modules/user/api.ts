import {DCM_API} from '../../lib/api/api';
import {RawUser, User} from './interface';
import {adaptUserToSave} from './adapters';

export const fetchUser = (userID: string): Promise<RawUser> => {
  return DCM_API()
    .url(`/user/${userID}`)
    .get()
    .json();
};

export const postUser = (user: User) => {
  return DCM_API()
    .headers({'Content-Type': 'application/json'})
    .url('/user')
    .body(JSON.stringify(adaptUserToSave(user)))
    .post()
    .res();
};

export const updateUser = (user: User) => {
  return DCM_API()
    .headers({'Content-Type': 'application/json'})
    .url(`/user/update?userID=${user.id}`)
    .body(JSON.stringify(adaptUserToSave(user)))
    .put();
};
