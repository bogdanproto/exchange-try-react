import { BottomNav } from '../../components/Home/BottomNav/BottomNav';

import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '../../components/MainStyles/MaterialTheme';
import { Header } from '../../components/Home/Header/Header';
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
