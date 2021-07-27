import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/Theme';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
