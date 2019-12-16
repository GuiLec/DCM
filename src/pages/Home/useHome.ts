import {mockedDictations} from '../../modules/dictation/mockedData';

export const useHome = () => {
  const activeDictation = mockedDictations[0];
  return {activeDictation};
};
