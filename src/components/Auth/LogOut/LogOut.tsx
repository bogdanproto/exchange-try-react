import { logOutUser } from 'services/redux/auth/operations/operationsAuth';
import { useTypeDispatch } from 'services/redux/customHook/typeHooks';
import { IconButton } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { argument } from 'interfaces/common/argument';

export const LogOut = () => {
  const dispatch = useTypeDispatch();

  const LogOutUser = () => {
    dispatch(logOutUser(argument.empty));
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
