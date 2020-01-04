import {useState} from 'react';

export const useWrittingChoicesArea = () => {
  const [selectedWord, setSelectedWord] = useState<{
    id: string;
    text: string;
    position: number;
  } | null>(null);
  const [inputText, setInputText] = useState<string | null>(null);

  const changeInputText = (text: string) => setInputText(text);

  const onWordPress = (word: {
    id: string;
    text: string;
    position: number;
  }) => () => {
    setSelectedWord(word);
  };

  const onAddButtonPress = () => {};

  return {
    setSelectedWord,
    onWordPress,
    selectedWord,
    changeInputText,
    onAddButtonPress,
  };
};
