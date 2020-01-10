import {mockedDictations} from './mockedData';
import {Dictation} from './interface';
import {fetchDictation} from './api';

export const getDictations = (): Promise<Dictation> => {
  return fetchDictation();
};
