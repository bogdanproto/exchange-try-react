import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Notifications from '@mui/icons-material/NotificationsNoneOutlined';
import { SelectHeader } from '../../Common/Inputs/SelectHeader/SelectHeader';
import { logOutUser } from 'services/redux/auth/operationsAuth';
import { useTypeDispatch } from 'services/redux/customHook/typeHooks';

export const Header = () => {
  const dispatch = useTypeDispatch();

  const LogOutUser = () => {
    dispatch(logOutUser());
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        component="nav"
        color="secondary"
        enableColorOnDark
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <SelectHeader />
          <button type="button" onClick={LogOutUser}>
            LogOut
          </button>

          <Stack direction="row">
            <Badge badgeContent={1} color="primary">
              <Notifications sx={{ fontSize: 28 }} />
            </Badge>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
