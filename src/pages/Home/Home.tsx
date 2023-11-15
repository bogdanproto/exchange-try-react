import { NavLinkAuth } from '../../components/MainStyles/ComponentCommon/AuthLinkContainer.styled';
import { routes } from '../../const/routes';
import { logOutUser } from '../../services/redux/auth/operations';
import { useTypeDispatch } from '../../services/redux/customHook/typeHooks';

export const Home = () => {
  const dispatch = useTypeDispatch();

  const LogOutUser = () => {
    dispatch(logOutUser());
  };
  return (
    <>
      <NavLinkAuth to={routes.SIGNUP}>Sign Up</NavLinkAuth>
      <NavLinkAuth to={routes.LOGIN}>Login</NavLinkAuth>
      <button type="button" onClick={LogOutUser}>
        LogOut
      </button>
    </>
  );
};
