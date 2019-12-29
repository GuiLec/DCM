import {useState} from 'react';
import {
  Choice,
  ChoiceInput,
  AnswersState,
  Dictation,
} from '../../modules/dictation/interface';
import {
  getInitialAnswersState,
  getCorrectAnswersState,
  getScore,
  sliceDication,
} from '../../modules/dictation/adapters';
import {Alert} from 'react-native';
import {useSelector} from 'react-redux';
import {selectDictations} from '../../modules/dictation/selectors';

export const useHome = () => {
  const dictations = useSelector(selectDictations);

  const [activeDictation, setActiveDictation] = useState<Dictation | null>();
  const [initalAnswersState, setInitalAnswersState] = useState<AnswersState>(
    {},
  );
  const [correctAnswersState, setCorrectAnswersState] = useState<AnswersState>(
    {},
  );

  const [answersState, setAnswersState] = useState<AnswersState>(
    initalAnswersState,
  );

  const setAnswer = (choiceInputID: string, choiceID: string) => () => {
    answersState[choiceInputID] = choiceID;
  };

  const activeSlicedDictation =
    activeDictation && sliceDication(activeDictation);

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

  const selectedChoiceInput: ChoiceInput | undefined =
    activeDictation &&
    activeDictation.choiceInputs.find(
      choiceInput => choiceInput.choiceInputID === selectedChoiceInputID,
    );
  const selectedChoiceInputChoices: Choice[] | undefined =
    selectedChoiceInput && selectedChoiceInput.choices;

  const isAnswersAreaVisible = selectedChoiceInputID !== null;

  const showScore = () =>
    Alert.alert('Score', getScore(correctAnswersState, answersState));

  const pickDictation = async () => {
    await setActiveDictation(null);
    await setSelectedChoiceID(null);
    await setSelectedChoiceInputID(null);
    const dictationIndex = Math.floor(Math.random() * dictations.length);
    await setActiveDictation(dictations[dictationIndex]);
    if (activeDictation) {
      await setInitalAnswersState(getInitialAnswersState(activeDictation));
      await setAnswersState(getInitialAnswersState(activeDictation));
      await setCorrectAnswersState(getCorrectAnswersState(activeDictation));
    }
  };

  return {
    activeSlicedDictation,
    isAnswersAreaVisible,
    selectChoiceInput,
    selectedChoiceInputID,
    selectedChoiceInputChoices,
    selectedChoiceID,
    selectChoice,
    setAnswer,
    showScore,
    pickDictation,
  };
};
