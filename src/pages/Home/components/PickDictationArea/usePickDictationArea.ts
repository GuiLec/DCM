import {useSelector} from 'react-redux';
import {selectDictations} from '../../../../modules/dictation/selectors';

export const usePickDictationArea = () => {
  const dictations = useSelector(selectDictations);
  return {dictations};
};
