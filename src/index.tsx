import '../src/fonts/fonts.css';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ReactDOM from 'react-dom/client';
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
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <BrowserRouter basename="/exchange-try-react">
          <App />
          <MainStyles />
        </BrowserRouter>
      </LocalizationProvider>
    </ThemeProvider>
  </Provider>
  // </React.StrictMode>
);
