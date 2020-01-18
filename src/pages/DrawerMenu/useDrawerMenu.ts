import {useNavigation} from 'react-navigation-hooks';
import {closeDrawer} from '../../navigation/actions';
import {selectUser} from '../../modules/user/selectors';
import {useSelector} from 'react-redux';

export const useDrawerMenu = () => {
  const {navigate} = useNavigation();

  const menutItems: {
    title: string;
    onPress: () => void;
    hasRightArrow?: boolean;
    itemLogoName?: string;
  }[] = [
    {
      title: 'Accueil',
      onPress: () => {
        navigate('home');
        closeDrawer();
      },
      itemLogoName: 'home',
    },
    {
      title: 'Je crée ma Dictée à Choix Multiples',
      onPress: () => {
        navigate('authorPage');
        closeDrawer();
      },
      hasRightArrow: true,
      itemLogoName: 'edit',
    },
  ];

  const user = useSelector(selectUser);

  return {menutItems, user};
};
