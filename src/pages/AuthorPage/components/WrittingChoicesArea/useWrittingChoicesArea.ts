import {useState} from 'react';

export const useWrittingChoicesArea = () => {
  const [selectedWordId, setSelectedWordId] = useState<string | null>(null);
  const [selectedWordText, setSelectedWordText] = useState<string | null>(null);
  const onWordPress = (id: string, word: string) => () => {
    setSelectedWordId(id);
    setSelectedWordText(word);
  };
  return {selectedWordId, setSelectedWordId, onWordPress, selectedWordText};
};
