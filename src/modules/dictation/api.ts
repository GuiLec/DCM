import {DCM_API} from '../../lib/api/api';
import {Dictation, RawDictation} from './interface';
import {adaptDictationToSave} from './adapters';

export const fetchDictations = (
  selectedLanguage: string,
  difficulties: number[],
): Promise<RawDictation[]> => {
  let concatenatedDifficulties = '';
  difficulties.forEach(
    difficulty =>
      (concatenatedDifficulties = `${concatenatedDifficulties}${difficulty}`),
  );
  const url = `/dictations/${selectedLanguage}/${concatenatedDifficulties}`;
  return DCM_API()
    .url(url)
    .get()
    .json();
};

export const postDictation = (dictation: Dictation) => {
  return DCM_API()
    .headers({'Content-Type': 'application/json'})
    .url('/dictations')
    .body(JSON.stringify(adaptDictationToSave(dictation)))
    .post()
    .res();
};
