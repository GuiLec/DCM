import {useState} from 'react';

export const usePreferences = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const selectLanguage = (language: string | null) => () =>
    setSelectedLanguage(language);

  const initialSelectedDifficulties: {[difficulty: number]: boolean} = {
    1: true,
    2: true,
    3: true,
    4: true,
    5: false,
  };

  const [selectedDifficulties, setSelectedDifficulties] = useState<{
    [difficulty: number]: boolean;
  }>(initialSelectedDifficulties);

  const toggleDifficulty = (difficulty: number) => () => {
    setSelectedDifficulties(state => {
      state[difficulty] = !state[difficulty];
      return {...state};
    });
  };

  return {
    selectedLanguage,
    selectLanguage,
    selectedDifficulties,
    toggleDifficulty,
  };
};
