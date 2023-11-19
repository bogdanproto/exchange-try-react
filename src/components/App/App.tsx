import { Route, Routes } from 'react-router-dom';
import { routes } from '../../const/routes';
import { Signup } from '../../pages/Signup/Signup';
import { Login } from '../../pages/Login/Login';
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
import { Loader } from '../Common/Loader/Loader';
import { NotificationBox } from '../Common/Notification/Notification';
import { Container } from './App.styled';
import { CommonInterface } from '../CommonInterface/CommonInterface';
import { Request } from '../../pages/Request/Request';

export const App = () => {
  const { isAppLoaded, isRefreshing, errorAuth } =
    useTypeSelector(selectAuthUser);
  const dispatch = useTypeDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Container>
      {isRefreshing && <Loader />}
      {errorAuth && <NotificationBox type="error" message={errorAuth} />}
      {isAppLoaded && (
        <Routes>
          <Route
            path={routes.HOME}
            element={
              <PrivateRoute
                redirectTo={routes.LOGIN}
                component={<CommonInterface />}
              />
            }
          >
            <Route index element={<Home />} />
            <Route path={routes.REQUEST} element={<Request />} />
            <Route path={routes.PROFILE} element={<p>profile</p>} />
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
    </Container>
  );
};
