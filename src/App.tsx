import React from 'react';
import {Home} from './pages';
import {ThemeProvider} from './lib/styled';
import {theme} from './lib/theme';
import {Provider} from 'react-redux';
import {store} from './modules/store';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
