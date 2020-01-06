import {useState} from 'react';
import {ChoiceInput} from '../../../../modules/dictation/interface';

export const useWrittingChoicesArea = () => {
  const [selectedWord, setSelectedWord] = useState<{
    id: string;
    text: string;
    position: number;
  } | null>(null);
  const [inputText, setInputText] = useState<string | null>(null);

  const [choiceInputs, setChoiceInputs] = useState<{[id: string]: ChoiceInput}>(
    {},
  );

  const changeInputText = (text: string) => setInputText(text);

  const onWordPress = (word: {
    id: string;
    text: string;
    position: number;
  }) => () => {
    setSelectedWord(word);
  };

  const onAddButtonPress = () => {
    choiceInputs[selectedWord.id] = {
      choiceInputID: selectedWord.id,
      position: selectedWord.position,
      choices: [
        {
          choiceID: '1',
          text: selectedWord.text,
        },
        {
          choiceID: `2_${inputText}`,
          text: inputText || '',
        },
      ],
      correctChoiceID: '1',
      originalTextLength: selectedWord.text.length,
    };
    setChoiceInputs(state => ({...state}));
  };

  return {
    setSelectedWord,
    onWordPress,
    selectedWord,
    changeInputText,
    onAddButtonPress,
    choiceInputs,
  };
};
