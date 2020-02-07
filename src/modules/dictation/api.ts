import {DCM_API} from '../../lib/api/api';
import {Dictation, RawDictation} from './interface';
import {adaptDictationToSave} from './adapters';

export const fetchDictations = (): Promise<RawDictation[]> => {
  return DCM_API()
    .url('/dictations')
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
