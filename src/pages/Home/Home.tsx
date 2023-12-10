import { logOutUser } from 'services/redux/auth/operationsAuth';
import { useTypeDispatch } from 'services/redux/customHook/typeHooks';

export const Home = () => {
  const dispatch = useTypeDispatch();

  const LogOutUser = () => {
    dispatch(logOutUser());
  };
  return (
    <>
      <button type="button" onClick={LogOutUser}>
        LogOut
      </button>
    </>
  );
};
