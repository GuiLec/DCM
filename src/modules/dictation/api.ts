import {DCM_API} from '../../lib/api/api';
import {Dictation} from './interface';

export const fetchDictation = (): Promise<Dictation> => {
  return DCM_API()
    .url('/dictations')
    .get()
    .json();
};
