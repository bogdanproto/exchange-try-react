import '../src/fonts/fonts.css';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/App';
import { MainStyles } from './components/MainStyles/MainStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './const/theme/theme';
import { Provider } from 'react-redux';
import { persistor, store } from './services/redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import React from 'react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <BrowserRouter>
            <App />
            <MainStyles />
          </BrowserRouter>
        </LocalizationProvider>
      </ThemeProvider>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
