import { BottomNav } from './BottomNav/BottomNav';

import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '../../components/MainStyles/MaterialTheme';
import { Header } from './Header/Header';
import { Outlet } from 'react-router-dom';

export const CommonInterface = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Header />
        <Outlet />
        <BottomNav />
      </ThemeProvider>
    </>
  );
};
