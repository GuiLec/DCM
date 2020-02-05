import {useState} from 'react';
import {defaultAppLanguage} from '../../environment/app';
import {useSelector, useDispatch} from 'react-redux';
import {selectUser} from '../../modules/user/selectors';
import {saveUserRequest} from '../../modules/user/actions';
import {useNavigation} from 'react-navigation-hooks';

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

  const dispatch = useDispatch();
  const {navigate} = useNavigation();

  const savePreferences = () => {
    dispatch(
      // @TODO creer une saga pour mettre à jour un user sur l'API et sur le store
      saveUserRequest(
        user ? {...user, dictationsDifficulties: selectedDifficulties} : null,
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
