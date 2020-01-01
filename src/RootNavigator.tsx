import {Home} from './pages';
import {Dimensions} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {DrawerMenu} from './pages/DrawerMenu';
import {AuthorPage} from './pages/AuthorPage/AuthorPage';

export const RootNavigator = createDrawerNavigator(
  {
    home: {
      screen: Home,
    },
    authorPage: {
      screen: AuthorPage,
    },
  },
  {
    drawerWidth: Dimensions.get('window').width,
    drawerLockMode: 'locked-open',
    navigationOptions: {
      header: null,
    },
    contentComponent: DrawerMenu,
    initialRouteName: 'home',
  },
);
