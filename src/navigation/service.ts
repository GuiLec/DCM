import {NavigationAction, NavigationContainerComponent} from 'react-navigation';

let _navigator: NavigationContainerComponent | null;

export const setTopLevelNavigator = (
  navigatorRef: NavigationContainerComponent,
) => {
  _navigator = navigatorRef;
};

export const dispatchNavigationAction = (action: NavigationAction) => {
  if (_navigator) {
    _navigator.dispatch(action);
  }
};
