import {useNavigation} from 'react-navigation-hooks';
import {closeDrawer} from '../../navigation/actions';

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
  return {menutItems};
};
