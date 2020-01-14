import {DCM_API} from '../../lib/api/api';
import {Dictation} from './interface';

export const fetchDictation = (): Promise<Dictation> => {
  return DCM_API()
    .url('/dictations')
    .get()
    .json();
};

export const postDictation = (dictation: Dictation) => {
  return DCM_API()
    .headers({'Content-Type': 'application/json'})
    .url('/dictations')
    .body(JSON.stringify(dictation))
    .post()
    .json();
};
