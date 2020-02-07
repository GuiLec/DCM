import {useState} from 'react';
import {ChoiceInput, Dictation} from '../../../../modules/dictation/interface';
import {useDispatch, useSelector} from 'react-redux';
import {fetchDictationsRequest} from '../../../../modules/dictation/actions';
import {Props} from './WrittingChoicesArea';
import {useNavigation} from 'react-navigation-hooks';
import {postDictation} from '../../../../modules/dictation/api';
import {selectUser} from '../../../../modules/user/selectors';
import {User} from '../../../../modules/user/interface';
import {defaultAppLanguage} from '../../../../environment/app';

const DEFAULT_DIFFICULTY = 3;

export const useWrittingChoicesArea = (props: Props) => {
  const [selectedWord, setSelectedWord] = useState<{
    id: string;
    text: string;
    position: number;
  } | null>(null);
  const [inputText, setInputText] = useState<string | null>(null);

  const [choiceInputs, setChoiceInputs] = useState<{[id: string]: ChoiceInput}>(
    {},
  );

  const isWordAGuess = (id: string) => Object.keys(choiceInputs).includes(id);

  const changeInputText = (text: string) => setInputText(text);

  const onWordPress = (word: {
    id: string;
    text: string;
    position: number;
  }) => () => {
    setSelectedWord(word);
  };

  const onAddButtonPress = () => {
    const newInput = {
      choiceID: `2_${inputText}`,
      text: inputText || '',
    };
    if (selectedWord)
      if (choiceInputs[selectedWord.id]) {
        if (
          !choiceInputs[selectedWord.id].choices
            .map(choice => choice.text)
            .includes(newInput.text)
        )
          choiceInputs[selectedWord.id].choices.push(newInput);
      } else
        choiceInputs[selectedWord.id] = {
          choiceInputID: selectedWord.id,
          position: selectedWord.position,
          choices: [
            {
              choiceID: '1',
              text: selectedWord.text,
            },
            newInput,
          ],
          correctChoiceID: '1',
          originalTextLength: selectedWord.text.length,
        };
    setChoiceInputs(state => ({...state}));
    setInputText('');
  };

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const selectLanguage = (language: string | null) => () =>
    setSelectedLanguage(language);

  const [difficulty, setDifficulty] = useState<number | null>(null);

  const user: User | null = useSelector(selectUser);
  const userID = user ? user.id : 'offline';

  const dispatch = useDispatch();
  const {navigate} = useNavigation();
  const newId = `NewDict${new Date()}${userID}`; // @todo add userID to avoid multi account conflicts

  const saveDictation = (value: string) => {
    const dictation: Dictation = {
      id: newId,
      name: value,
      text: props.text,
      choiceInputs: Object.values(choiceInputs),
      author: user || undefined,
      difficulty: difficulty || DEFAULT_DIFFICULTY,
      language: selectedLanguage || defaultAppLanguage,
    };

    postDictation(dictation);
    dispatch(fetchDictationsRequest());
    setIsModalVisible(false);
    props.cancelNewDictation();
    navigate('home');
  };

  const toggleModal = () => setIsModalVisible(state => !state);

  return {
    setSelectedWord,
    onWordPress,
    selectedWord,
    inputText,
    changeInputText,
    onAddButtonPress,
    choiceInputs,
    isWordAGuess,
    saveDictation,
    isModalVisible,
    toggleModal,
    selectedLanguage,
    selectLanguage,
    difficulty,
    setDifficulty,
  };
};
