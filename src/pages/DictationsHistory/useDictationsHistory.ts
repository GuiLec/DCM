import {useSelector} from 'react-redux';
import {selectUser} from '../../modules/user/selectors';

export const useDictationsHistory = () => {
  const user = useSelector(selectUser);
  const dictationEvents = user ? user.dictationsHistory : [];
  return {dictationEvents};
};
