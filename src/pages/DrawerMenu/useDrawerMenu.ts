import {useNavigation} from 'react-navigation-hooks';

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
      onPress: () => navigate('home'),
      itemLogoName: 'home',
    },
    {
      title: 'Je crée ma Dictée à Choix Multiples',
      onPress: () => navigate('authorPage'),
      hasRightArrow: true,
      itemLogoName: 'edit',
    },
  ];
  return {menutItems};
};
