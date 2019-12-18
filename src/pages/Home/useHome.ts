import {getSlicedDictation} from '../../modules/dictation/connector';

export const useHome = () => {
  const activeSlicedDictation = getSlicedDictation();
  return {activeSlicedDictation};
};
