import { BottomNav } from './BottomNav/BottomNav';
import { Header } from './Header/Header';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

export const LayoutInterface = () => {
  return (
    <>
      <Header />
      <Container
        sx={{ marginTop: '64px', marginBottom: '64px', overflow: 'auto' }}
      >
        <Outlet />
      </Container>
      <BottomNav />
    </>
  );
};
