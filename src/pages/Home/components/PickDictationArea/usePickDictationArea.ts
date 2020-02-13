import {useSelector} from 'react-redux';
import {selectDictations} from '../../../../modules/dictation/selectors';
import {useNavigation} from 'react-navigation-hooks';

export const usePickDictationArea = () => {
  const dictations = useSelector(selectDictations);

  const {navigate} = useNavigation();
  const navigateToPreferences = () => navigate('preferences');
  return {dictations, navigateToPreferences};
};
