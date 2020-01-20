import {Home} from './pages';
import {Dimensions} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {DrawerMenu} from './pages/DrawerMenu';
import {AuthorPage} from './pages/AuthorPage/AuthorPage';
import {EntrancePage} from './pages/EntrancePage/EntrancePage';
import {DictationsHistory} from './pages/DictationsHistory/DictationHistory';

export const RootNavigator = createDrawerNavigator(
  {
    home: {
      screen: Home,
    },
    authorPage: {
      screen: AuthorPage,
    },
    entrance: {
      screen: EntrancePage,
    },
    dictationsHistory: {
      screen: DictationsHistory,
    },
  },
  {
    drawerWidth: Dimensions.get('window').width,
    drawerLockMode: 'locked-open',
    navigationOptions: {
      header: null,
    },
    contentComponent: DrawerMenu,
    initialRouteName: 'entrance',
  },
);
