import {useState, useEffect} from 'react';
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
import {useSelector, useDispatch} from 'react-redux';
import {selectDictations} from '../../modules/dictation/selectors';
import {shuffle} from '../../lib/utils';
import {fetchDictationsRequest} from '../../modules/dictation/actions';
import {updateDictationsHistoryRequest} from '../../modules/user/actions';

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

  const setAnswer = (choiceInputID: string | null, choiceID: string) => () => {
    if (choiceInputID) answersState[choiceInputID] = choiceID;
  };

  const activeSlicedDictation =
    activeDictation && sliceDication(activeDictation);

  const [selectedChoiceInputID, setSelectedChoiceInputID] = useState<
    string | null
  >(null);

  const selectChoiceInput = (choiceInputID: string | null) => () => {
    setSelectedChoiceInputID(choiceInputID);
    setSelectedChoiceID(null);
  };

  const [selectedChoiceID, setSelectedChoiceID] = useState<string | null>(null);

  const selectChoice = (choiceID: string) => () =>
    setSelectedChoiceID(choiceID);

  const selectedChoiceInput: ChoiceInput | null | undefined =
    activeDictation &&
    activeDictation.choiceInputs.find(
      choiceInput => choiceInput.choiceInputID === selectedChoiceInputID,
    );
  const selectedChoiceInputChoices: Choice[] | null | undefined =
    selectedChoiceInput && shuffle(selectedChoiceInput.choices);

  const isAnswersAreaVisible = selectedChoiceInputID !== null;

  const [isPickDictationAreaVisible, setIsPickDictationAreaVisible] = useState<
    boolean
  >(true);

  const togglePickDictationArea = () =>
    setIsPickDictationAreaVisible(state => !state);

  const submitDictation = () => {
    if (activeDictation) {
      console.log('dispatch', {
        id: `${activeDictation.id}`,
        dictationName: activeDictation.name,
        score: getScore(correctAnswersState, answersState),
        date: Date.now() / 1000,
      });
      dispatch(
        updateDictationsHistoryRequest({
          id: `${activeDictation.id}`,
          dictationName: activeDictation.name,
          score: getScore(correctAnswersState, answersState),
          date: Date.now() / 1000,
        }),
      );
    }
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

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDictationsRequest());
  }, []);

  return {
    activeSlicedDictation,
    isAnswersAreaVisible,
    selectChoiceInput,
    selectedChoiceInputID,
    selectedChoiceInputChoices,
    selectedChoiceID,
    selectChoice,
    setAnswer,
    submitDictation,
    pickDictation,
    isPickDictationAreaVisible,
    togglePickDictationArea,
  };
};
