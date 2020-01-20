import {fetchUser} from './api';
import {adaptUser} from './adapters';
import {User} from './interface';

export const getUser = async (id: string): Promise<User> => {
  const rawUser = await fetchUser(id);
  return adaptUser(rawUser);
};
