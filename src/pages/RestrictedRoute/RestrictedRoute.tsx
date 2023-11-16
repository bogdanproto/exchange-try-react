import { Navigate } from 'react-router-dom';
import { useTypeSelector } from '../../services/redux/customHook/typeHooks';
import { selectAuthUser } from '../../services/redux/auth/selectors';
import { IPropsPages } from '../../interfaces/compInterfaces';

export const RestrictedRoute = ({ component, redirectTo }: IPropsPages) => {
  const { isLoggedIn } = useTypeSelector(selectAuthUser);

  return <>{isLoggedIn ? <Navigate to={redirectTo} /> : component}</>;
};
