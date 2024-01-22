import { BottomNav } from './BottomNav/BottomNav';
import { Header } from './Header/Header';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import { useEffect } from 'react';
import { useTypeDispatch } from 'services/redux/customHook/typeHooks';
import { getQntUnviewedNotify } from 'services/redux/data/operations';
import { argument } from 'interfaces/common/argument';

export const LayoutInterface = () => {
  const dispatch = useTypeDispatch();

  useEffect(() => {
    dispatch(getQntUnviewedNotify(argument.empty));

    const intervalId = setInterval(() => {
      dispatch(getQntUnviewedNotify(argument.empty));
    }, 1000 * 60 * 5);

    return () => {
      clearInterval(intervalId);
    };
  }, [dispatch]);

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
