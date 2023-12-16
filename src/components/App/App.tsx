import { Route, Routes } from 'react-router-dom';
import { routes } from 'const/routes';
import { Signup } from 'pages/Signup/Signup';
import { Login } from 'pages/Login/Login';
import { Home } from 'pages/Home/Home';
import { useEffect } from 'react';
import { refreshUser } from 'services/redux/auth/operationsAuth';
import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import { PrivateRoute } from 'pages/PrivateRoute/PrivateRoute';
import { RestrictedRoute } from 'pages/RestrictedRoute/RestrictedRoute';
import { selectAuthUser } from 'services/redux/auth/selectors';
import { Loader } from '../Common/Loader/Loader';
import { NotificationBox } from '../Common/Notification/Notification';
import { ThemeProvider } from '@mui/material/styles';
import { LayoutInterface } from '../LayoutInterface/LayoutInterface';
import { Proposal } from 'pages/Proposal/Proposal';
import { darkTheme } from '../MainStyles/MaterialTheme';
import { Profile } from 'pages/Profile/Profile';
import { errorMessage } from 'const/errorNotification';

export const App = () => {
  const { isRefreshing, isAppLoaded, errorAuth } =
    useTypeSelector(selectAuthUser);

  const dispatch = useTypeDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={darkTheme}>
      {isRefreshing && <Loader />}
      {errorAuth && errorAuth !== errorMessage.user_unauthorized_token && (
        <NotificationBox type="error" message={errorAuth} />
      )}

      {isAppLoaded && (
        <Routes>
          <Route
            path={routes.HOME}
            element={
              <PrivateRoute
                redirectTo={routes.LOGIN}
                component={<LayoutInterface />}
              />
            }
          >
            <Route index element={<Home />} />
            <Route path={routes.REQUEST} element={<Proposal />} />
            <Route path={routes.PROFILE} element={<Profile />} />
          </Route>

          <Route
            path={routes.LOGIN}
            element={
              <RestrictedRoute redirectTo={routes.HOME} component={<Login />} />
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
        </Routes>
      )}
    </ThemeProvider>
  );
};
