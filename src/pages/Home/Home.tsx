import { useEffect } from 'react';
import { logOutUser } from 'services/redux/auth/operationsAuth';
import { useTypeDispatch } from 'services/redux/customHook/typeHooks';
import { getAllProposalPending } from 'services/redux/data/operations';

export const Home = () => {
  const dispatch = useTypeDispatch();

  useEffect(() => {
    dispatch(getAllProposalPending());
  }, [dispatch]);

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
