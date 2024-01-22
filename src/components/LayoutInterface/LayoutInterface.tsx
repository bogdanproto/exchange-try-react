import { BottomNav } from './BottomNav/BottomNav';
import { Header } from './Header/Header';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import { useEffect } from 'react';
import { useTypeDispatch } from 'services/redux/customHook/typeHooks';
import { getAllNotify } from 'services/redux/data/operations';

export const LayoutInterface = () => {
  const dispatch = useTypeDispatch();

  useEffect(() => {
    dispatch(getAllNotify({ page: 1, limit: 100 }));
  });

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
