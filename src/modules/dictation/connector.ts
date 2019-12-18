import {sliceDication} from './adapters';
import {mockedDictations} from './mockedData';
import {SlicedDictation} from './interface';

export const getSlicedDictation = (): SlicedDictation => {
  return sliceDication(mockedDictations[0]);
};
