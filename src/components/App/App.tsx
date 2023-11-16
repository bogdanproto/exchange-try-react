import { Route, Routes } from 'react-router-dom';
import { routes } from '../../const/routes';
import { Signup } from '../../pages/Signup/Signup';
import { Login } from '../../pages/Login/Login';
import { SharedLayout } from '../SharedLayout/SharedLayout';
import { Home } from '../../pages/Home/Home';
import { useEffect } from 'react';
import { refreshUser } from '../../services/redux/auth/operations';
import {
  useTypeDispatch,
  useTypeSelector,
} from '../../services/redux/customHook/typeHooks';
import { PrivateRoute } from '../../pages/PrivateRoute/PrivateRoute';
import { RestrictedRoute } from '../../pages/RestrictedRoute/RestrictedRoute';
import { selectAuthUser } from '../../services/redux/auth/selectors';
import { Loader } from '../Loader/Loader';
import { NotificationBox } from '../Notification/Notification';

export const App = () => {
  const { isAppLoaded, isRefreshing, errorAuth } =
    useTypeSelector(selectAuthUser);
  const dispatch = useTypeDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing && <Loader />}
      {errorAuth && <NotificationBox type="error" message={errorAuth} />}
      {isAppLoaded && (
        <Routes>
          <Route path={routes.HOME} element={<SharedLayout />}>
            <Route
              index
              element={
                <PrivateRoute redirectTo={routes.LOGIN} component={<Home />} />
              }
            />
            <Route
              path={routes.LOGIN}
              element={
                <RestrictedRoute
                  redirectTo={routes.HOME}
                  component={<Login />}
                />
              }
            />
            <Route
              path={routes.SIGNUP}
              element={
                <RestrictedRoute
                  redirectTo={routes.HOME}
                  component={<Signup />}
                />
              }
            />
          </Route>
        </Routes>
      )}
    </>
  );
};
