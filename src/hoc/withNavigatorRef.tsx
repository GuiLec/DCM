import React, {ComponentType} from 'react';
import {NavigationContainerComponent} from 'react-navigation';

import {setTopLevelNavigator} from '../navigation/service';

export const withNavigatorRef = (
  Component: React.ComponentClass,
): ComponentType =>
  function NavigatorRefBinder() {
    return (
      <Component
        ref={(navigatorRef: NavigationContainerComponent) => {
          setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  };
