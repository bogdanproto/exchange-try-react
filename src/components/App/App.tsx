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
  Pending,
  PrivateRoute,
  Profile,
  Proposal,
  Proposals,
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
            path={routes.BASE}
            element={
              <PrivateRoute
                redirectTo={routes.LOGIN}
                component={<LayoutInterface />}
              />
            }
          >
            <Route path={routes.BASE} element={<Home />}>
              <Route path={routes.GORIDE} element={<p>Goride</p>} />
              <Route path={routes.PROPOSALS} element={<Proposals />} />
              <Route path={routes.PENDING} element={<Pending />} />
            </Route>
            <Route path={routes.PROPOSAL} element={<Proposal />} />
            <Route path={routes.PROFILE} element={<Profile />} />
          </Route>

          <Route
            path={routes.LOGIN}
            element={
              <RestrictedRoute redirectTo={routes.BASE} component={<Login />} />
            }
          />
          <Route
            path={routes.SIGNUP}
            element={
              <RestrictedRoute
                redirectTo={routes.BASE}
                component={<Signup />}
              />
            }
          />
        </Routes>
      )}
    </ThemeProvider>
  );
};
