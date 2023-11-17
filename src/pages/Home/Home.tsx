import { BottomNav } from '../../components/BottomNav/BottomNav';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { logOutUser } from '../../services/redux/auth/operations';
import { useTypeDispatch } from '../../services/redux/customHook/typeHooks';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const Home = () => {
  const dispatch = useTypeDispatch();

  const LogOutUser = () => {
    dispatch(logOutUser());
  };
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker />
        </LocalizationProvider>
      </ThemeProvider>
      <button type="button" onClick={LogOutUser}>
        LogOut
      </button>
      <BottomNav />
    </>
  );
};
