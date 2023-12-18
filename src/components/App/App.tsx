import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { refreshUser } from 'services/redux/auth/operationsAuth';
import { ThemeProvider } from '@mui/material/styles';
import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import { LayoutInterface } from '../LayoutInterface/LayoutInterface';
import { darkTheme } from '../MainStyles/MaterialTheme';
import { selectService } from 'services/redux/commonSelectors';
import {
  Home,
  Login,
  PrivateRoute,
  Profile,
  Proposal,
  RestrictedRoute,
  Signup,
} from 'pages';
import { Loader, NotificationBox } from 'components/Common';
import { errorMessage, routes } from 'const';

export const App = () => {
  const { error, isLoading, isAppLoaded } = useTypeSelector(selectService);

  const dispatch = useTypeDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={darkTheme}>
      {isLoading && <Loader />}
      {error && error !== errorMessage.user_unauthorized_token && (
        <NotificationBox type="error" message={error} />
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
