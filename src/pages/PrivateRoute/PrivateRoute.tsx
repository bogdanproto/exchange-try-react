import { Navigate } from 'react-router-dom';
import { useTypeSelector } from 'services/redux/customHook/typeHooks';
import { selectAuthUser } from 'services/redux/auth/selectors';
import { IPropsPages } from 'interfaces/component/compInterfaces';

export const PrivateRoute = ({ component, redirectTo }: IPropsPages) => {
  const { isLoggedIn } = useTypeSelector(selectAuthUser);

  return (
    <>
      {isLoggedIn && component}
      {!isLoggedIn && <Navigate to={redirectTo} />}
    </>
  );
};
