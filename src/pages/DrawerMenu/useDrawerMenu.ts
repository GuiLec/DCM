import {useNavigation} from 'react-navigation-hooks';
import {closeDrawer} from '../../navigation/actions';
import {selectUser} from '../../modules/user/selectors';
import {useSelector, useDispatch} from 'react-redux';
import {saveUserRequest} from '../../modules/user/actions';

export const useDrawerMenu = () => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const menutItems: {
    title: string;
    onPress?: () => void;
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

  if (user)
    menutItems.push(
      {
        title: 'Mon historique',
        onPress: () => {
          navigate('dictationsHistory');
          closeDrawer();
        },
        hasRightArrow: true,
        itemLogoName: 'book-open',
      },
      {
        title: 'Mes préférences',
        onPress: () => {
          navigate('preferences');
          closeDrawer();
        },
        hasRightArrow: true,
        itemLogoName: 'cogs',
      },
      {
        title: 'Déconnexion',
        onPress: () => {
          dispatch(saveUserRequest(null));
          navigate('entrance');
          closeDrawer();
        },
        hasRightArrow: false,
        itemLogoName: 'power-off',
      },
    );

  const goToEntrance = () => navigate('entrance');

  return {menutItems, user, goToEntrance};
};
