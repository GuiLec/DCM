import {Dictation} from './interface';
import {fetchDictations} from './api';
import {adaptDictations} from './adapters';

export const getDictations = async (
  selectedLanguage: string,
  difficulties: number[],
): Promise<Dictation[]> => {
  const rawDictations = await fetchDictations(selectedLanguage, difficulties);
  return adaptDictations(rawDictations);
};
