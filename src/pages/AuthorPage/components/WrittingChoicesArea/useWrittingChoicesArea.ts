import {useState} from 'react';

export const useWrittingChoicesArea = () => {
  const [selectedWordId, setSelectedWordId] = useState<string | null>(null);
  const onWordPress = (id: string) => () => {
    setSelectedWordId(id);
  };
  return {selectedWordId, onWordPress};
};
