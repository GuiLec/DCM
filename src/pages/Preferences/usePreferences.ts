import {useState} from 'react';
import {defaultAppLanguage} from '../../environment/app';
import {useSelector} from 'react-redux';
import {selectUser} from '../../modules/user/selectors';

export const usePreferences = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    defaultAppLanguage,
  );
  const selectLanguage = (language: string) => () =>
    setSelectedLanguage(language);

  const user = useSelector(selectUser);
  const initiallySelectedDifficulties = user
    ? user.dictationsDifficulties
    : [1, 2, 3, 4];

  const [selectedDifficulties, setSelectedDifficulties] = useState<number[]>(
    initiallySelectedDifficulties,
  );

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
