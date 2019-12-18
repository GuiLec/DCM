import {getSlicedDictation} from '../../modules/dictation/connector';
import {useState} from 'react';

export const useHome = () => {
  const activeSlicedDictation = getSlicedDictation();

  const [selectedChoiceImputID, setSelectedChoiceInputID] = useState<
    string | null
  >(null);

  const selectChoiceInput = (choiceInputID: string) => () =>
    setSelectedChoiceInputID(choiceInputID);

  const isAnswersAreaVisible = selectedChoiceImputID !== null;

  return {activeSlicedDictation, isAnswersAreaVisible, selectChoiceInput};
};
