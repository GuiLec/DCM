import React from 'react';
import {RootNavigator} from './RootNavigator';
import {ThemeProvider} from './lib/styled';
import {theme} from './lib/theme';
import {Provider} from 'react-redux';
import {store} from './modules/store';
import {createAppContainer} from 'react-navigation';
// @ts-ignore
import {compose} from 'recompose';
import {withNavigatorRef} from './hoc/withNavigatorRef';

const enhancers = [withNavigatorRef, createAppContainer];

const enhance = compose<{}, {}>(...enhancers);

const AppContainer = enhance(RootNavigator);

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppContainer />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
