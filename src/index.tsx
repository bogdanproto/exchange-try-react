import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/fonts/fonts.css';
import { App } from './components/App/App';
import { MainStyles } from './components/MainStyles/MainStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './const/theme';
import { Provider } from 'react-redux';
import { store } from './services/redux/store';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/exchange-try-react">
        <App />
      </BrowserRouter>
      <MainStyles />
    </ThemeProvider>
  </Provider>
  // </React.StrictMode>
);
