import { Route, Routes } from 'react-router-dom';

import { useEffect } from 'react';
import { refreshUser } from 'services/redux/auth/operations/operationsAuth';
import { ThemeProvider } from '@mui/material/styles';
import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import { LayoutInterface } from '../LayoutInterface/LayoutInterface';
import { darkTheme } from '../MainStyles/MaterialTheme';
import { selectIsAppLoaded } from 'services/redux/commonSelectors';
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
import { routes } from 'const';
import { Goride } from 'pages/Goride/Goride';
import { Notification } from 'components/Notification/Notification';

export const App = () => {
  const isAppLoaded = useTypeSelector(selectIsAppLoaded);

  const dispatch = useTypeDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (
        e.touches[0].clientX > 20 &&
        e.touches[0].clientX < window.innerWidth - 20
      )
        return;

      e.preventDefault();
    };

    window.addEventListener('touchstart', handleTouchStart as EventListener, {
      passive: false,
    });

    return () => {
      window.removeEventListener(
        'touchstart',
        handleTouchStart as EventListener
      );
    };
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Notification />
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
              <Route path={routes.GORIDE} element={<Goride />} />
              <Route path={routes.PAST} element={<p>Past</p>} />
              <Route path={routes.CANCELLED} element={<p>Cancelled</p>} />
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
