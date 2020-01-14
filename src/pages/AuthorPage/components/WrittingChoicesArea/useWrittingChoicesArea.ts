import {useState} from 'react';
import {ChoiceInput} from '../../../../modules/dictation/interface';
import {useDispatch, useSelector} from 'react-redux';
import {
  saveDictationsRequest,
  fetchDictationsRequest,
} from '../../../../modules/dictation/actions';
import {Props} from './WrittingChoicesArea';
import {useNavigation} from 'react-navigation-hooks';
import {postDictation} from '../../../../modules/dictation/api';

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

  const [isPromptVisible, setIsPromptVisible] = useState<boolean>(false);

  const dispatch = useDispatch();
  const {navigate} = useNavigation();
  const newId = `NewDict${new Date()}`; // @todo add userID to avoid multi account conflicts
  const saveDictation = (value: string) => {
    const dictation = {
      id: newId,
      name: value,
      text: props.text,
      choiceInputs: Object.values(choiceInputs),
    };

    postDictation(dictation);
    dispatch(fetchDictationsRequest());
    setIsPromptVisible(false);
    props.cancelNewDictation();
    navigate('home');
  };

  const togglePrompt = () => setIsPromptVisible(state => !state);

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
    isPromptVisible,
    togglePrompt,
  };
};
