import {
  getSlicedDictation,
  getDictation,
} from '../../modules/dictation/connector';
import {useState} from 'react';
import {
  Choice,
  ChoiceInput,
  AnswersState,
} from '../../modules/dictation/interface';
import {
  getInitialAnswersState,
  getCorrectAnswersState,
} from '../../modules/dictation/adapters';

export const useHome = () => {
  const activeDictation = getDictation();
  const initalAnswersState = getInitialAnswersState(activeDictation);
  const correctAnswersState = getCorrectAnswersState(activeDictation);

  const [answersState, setAnswersState] = useState<AnswersState>(
    initalAnswersState,
  );

  const setAnswer = (choiceInputID: string, choiceID: string) => () => {
    answersState[choiceInputID] = choiceID;
  };

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
    setAnswer,
  };
};
