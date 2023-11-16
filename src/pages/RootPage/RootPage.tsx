import { Navigate } from 'react-router-dom';
import { routes } from '../../const/routes';
import { useTypeSelector } from '../../services/redux/customHook/typeHooks';
import { selectAuthUser } from '../../services/redux/auth/selectors';

const RootPage = () => {
  const { isLoggedIn, isAppLoaded } = useTypeSelector(selectAuthUser);

  return (
    <>
      {isLoggedIn && <Navigate to={routes.HOME} />}
      {!isLoggedIn && isAppLoaded && <Navigate to={routes.LOGIN} />}
    </>
  );
};

export default RootPage;
