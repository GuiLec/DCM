import {sliceDication} from './adapters';
import {mockedDictations} from './mockedData';
import {SlicedDictation, Dictation} from './interface';

export const getSlicedDictation = (): SlicedDictation => {
  return sliceDication(mockedDictations[0]);
};

export const getDictation = (): Dictation => {
  return mockedDictations[0];
};
