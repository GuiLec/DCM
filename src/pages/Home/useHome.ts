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

  const [activeDictation, setActiveDictation] = useState<Dictation | null>(
    null,
  );

  const initalAnswersState = getInitialAnswersState(activeDictation);
  const correctAnswersState = getCorrectAnswersState(activeDictation);

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

  const [isPickDictationAreaVisible, setIsPickDictationAreaVisible] = useState<
    boolean
  >(false);

  const showScore = () => {
    Alert.alert('Score', getScore(correctAnswersState, answersState));
  };

  const pickDictation = async (dictationId?: string) => {
    setIsPickDictationAreaVisible(false);
    await setActiveDictation(null);
    setSelectedChoiceID(null);
    setSelectedChoiceInputID(null);
    const pickedDictation = dictations.find(
      dictation => dictation.id === dictationId,
    );
    const randomIndex = Math.floor(Math.random() * dictations.length);
    if (pickedDictation) await setActiveDictation(pickedDictation);
    else await setActiveDictation(dictations[randomIndex]);
    setAnswersState({});
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
    isPickDictationAreaVisible,
    setIsPickDictationAreaVisible,
  };
};
