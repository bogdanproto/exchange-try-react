import { logOutUser } from 'services/redux/auth/operationsAuth';
import { useTypeDispatch } from 'services/redux/customHook/typeHooks';
import { IconButton } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export const LogOut = () => {
  const dispatch = useTypeDispatch();

  const LogOutUser = () => {
    dispatch(logOutUser());
  };
  return (
    <IconButton
      type="button"
      onClick={LogOutUser}
      aria-label="LogOut"
      size="medium"
      color="primary"
    >
      <ExitToAppIcon fontSize="inherit" />
    </IconButton>
  );
};
