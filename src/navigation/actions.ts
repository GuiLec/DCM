import {DrawerActions} from 'react-navigation-drawer';
import {dispatchNavigationAction} from './service';

const openDrawerAction = DrawerActions.openDrawer();
const closeDrawerAction = DrawerActions.closeDrawer();

export const openDrawer = (): void =>
  dispatchNavigationAction(openDrawerAction);
export const closeDrawer = (): void =>
  dispatchNavigationAction(closeDrawerAction);
