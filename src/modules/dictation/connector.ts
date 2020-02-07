import {Dictation} from './interface';
import {fetchDictations} from './api';
import {adaptDictations} from './adapters';

export const getDictations = async (): Promise<Dictation[]> => {
  const rawDictations = await fetchDictations();
  return adaptDictations(rawDictations);
};
