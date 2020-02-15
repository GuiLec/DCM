import {useSelector} from 'react-redux';
import {selectDictations} from '../../../../modules/dictation/selectors';
import {useNavigation} from 'react-navigation-hooks';
import {actionIsLoadingSelector} from '../../../../modules/loader/selectors';

export const usePickDictationArea = () => {
  const dictations = useSelector(selectDictations);

  const {navigate} = useNavigation();
  const navigateToPreferences = () => navigate('preferences');

  const areDictationsLoading = useSelector(
    actionIsLoadingSelector('FETCH_DICTATIONS'),
  );

  return {dictations, navigateToPreferences, areDictationsLoading};
};
