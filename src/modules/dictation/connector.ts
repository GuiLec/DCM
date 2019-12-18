import {sliceDication} from './adapter';
import {mockedDictations} from './mockedData';
import {SlicedDictation} from './interface';

export const getSlicedDictation = (): SlicedDictation => {
  return sliceDication(mockedDictations[0]);
};
