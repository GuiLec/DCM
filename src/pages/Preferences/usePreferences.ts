import {useState} from 'react';
import {defaultAppLanguage} from '../../environment/app';

export const usePreferences = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    defaultAppLanguage,
  );
  const selectLanguage = (language: string) => () =>
    setSelectedLanguage(language);

  const [selectedDifficulties, setSelectedDifficulties] = useState<number[]>([
    1,
    2,
    3,
    4,
  ]);

  const toggleDifficulty = (difficulty: number) => () => {
    var index = selectedDifficulties.indexOf(difficulty);
    const newSelectedDifficulties = [...selectedDifficulties];
    if (index === -1) {
      newSelectedDifficulties.push(difficulty);
    } else {
      newSelectedDifficulties.splice(index, 1);
    }
    setSelectedDifficulties(newSelectedDifficulties);
  };

  return {
    selectedLanguage,
    selectLanguage,
    selectedDifficulties,
    toggleDifficulty,
  };
};
