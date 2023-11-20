import { BottomNav } from './BottomNav/BottomNav';
import { Header } from './Header/Header';
import { Outlet } from 'react-router-dom';

export const LayoutInterface = () => {
  return (
    <>
      <Header />
      <Outlet />
      <BottomNav />
    </>
  );
};
