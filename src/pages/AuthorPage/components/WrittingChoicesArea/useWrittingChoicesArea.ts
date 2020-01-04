import {useState} from 'react';

export const useWrittingChoicesArea = () => {
  const [selectedWordId, setSelectedWordId] = useState<string | null>(null);
  const [selectedWordText, setSelectedWordText] = useState<string | null>(null);
  const [inputText, setInputText] = useState<string | null>(null);

  const changeInputText = (text: string) => setInputText(text);

  const onWordPress = (id: string, word: string) => () => {
    setSelectedWordId(id);
    setSelectedWordText(word);
  };

  const onAddButtonPress = () => {};

  return {
    selectedWordId,
    setSelectedWordId,
    onWordPress,
    selectedWordText,
    changeInputText,
    onAddButtonPress,
  };
};
