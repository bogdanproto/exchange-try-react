import { Route, Routes } from 'react-router-dom';
import { routes } from '../../const/routes';
import { Signup } from '../../pages/Signup/Signup';
import { Login } from '../../pages/Login/Login';
import { SharedLayout } from '../SharedLayout/SharedLayout';
import { Home } from '../../pages/Home/Home';
import { useEffect } from 'react';
import { refreshUser } from '../../services/redux/auth/operations';
import { useTypeDispatch } from '../../services/redux/customHook/typeHooks';

export const App = () => {
  const dispatch = useTypeDispatch();

  useEffect(() => {
    console.log('app');
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path={routes.HOME} element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path={routes.LOGIN} element={<Login />} />
          <Route path={routes.SIGNUP} element={<Signup />} />
        </Route>
      </Routes>
    </>
  );
};
