import {useState} from 'react';
import {defaultAppLanguage, defaultDifficulties} from '../../environment/app';
import {useSelector, useDispatch} from 'react-redux';
import {selectUser} from '../../modules/user/selectors';
import {updateUserRequest} from '../../modules/user/actions';
import {useNavigation} from 'react-navigation-hooks';

export const usePreferences = () => {
  const user = useSelector(selectUser);
  const initiallySelectedDifficulties = user
    ? user.dictationsDifficulties
    : defaultDifficulties;
  const initiallySelectedLanguage = user
    ? user.selectedLanguage
    : defaultAppLanguage;

  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    initiallySelectedLanguage,
  );
  const selectLanguage = (language: string) => () =>
    setSelectedLanguage(language);

  const [selectedDifficulties, setSelectedDifficulties] = useState<number[]>(
    initiallySelectedDifficulties,
  );

  const toggleDifficulty = (difficulty: number) => () => {
    var index = selectedDifficulties.indexOf(difficulty);
    const newSelectedDifficulties = [...selectedDifficulties];
    if (index === -1) {
      newSelectedDifficulties.push(difficulty);
    } else {
      if (selectedDifficulties.length !== 1)
        newSelectedDifficulties.splice(index, 1);
    }
    setSelectedDifficulties(newSelectedDifficulties);
  };

  const dispatch = useDispatch();
  const {navigate} = useNavigation();

  const savePreferences = () => {
    dispatch(
      // @TODO creer une saga pour mettre à jour un user sur l'API et sur le store
      updateUserRequest(
        user
          ? {
              ...user,
              selectedLanguage,
              dictationsDifficulties: selectedDifficulties,
            }
          : null,
      ),
    );
    navigate('home');
  };

  return {
    selectedLanguage,
    selectLanguage,
    selectedDifficulties,
    toggleDifficulty,
    savePreferences,
  };
};
