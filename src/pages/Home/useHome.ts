import {
  getSlicedDictation,
  getDictation,
} from '../../modules/dictation/connector';
import {useState} from 'react';
import {Choice, ChoiceInput} from '../../modules/dictation/interface';

export const useHome = () => {
  const activeDictation = getDictation();
  const activeSlicedDictation = getSlicedDictation();

  const [selectedChoiceInputID, setSelectedChoiceInputID] = useState<
    string | null
  >(null);

  const selectChoiceInput = (choiceInputID: string) => () => {
    setSelectedChoiceInputID(choiceInputID);
    setSelectedChoiceID(null);
  };

  const [selectedChoiceID, setSelectedChoiceID] = useState<string | null>(null);

  const selectChoice = (choiceID: string) => () =>
    setSelectedChoiceID(choiceID);

  const selectedChoiceInput:
    | ChoiceInput
    | undefined = activeDictation.choiceInputs.find(
    choiceInput => choiceInput.choiceInputID === selectedChoiceInputID,
  );
  const selectedChoiceInputChoices: Choice[] | undefined =
    selectedChoiceInput && selectedChoiceInput.choices;

  const isAnswersAreaVisible = selectedChoiceInputID !== null;

  return {
    activeSlicedDictation,
    isAnswersAreaVisible,
    selectChoiceInput,
    selectedChoiceInputID,
    selectedChoiceInputChoices,
    selectedChoiceID,
    selectChoice,
  };
};
