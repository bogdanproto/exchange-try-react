import {
  Box,
  Paper,
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/ScreenRotationAltOutlined';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import UserIcon from '@mui/icons-material/AccountCircleOutlined';
import { btn } from '../../../const/components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../const/routes';
import { useTypeSelector } from 'services/redux/customHook/typeHooks';
import { selectUser } from 'services/redux/auth/selectors';
import { formatName } from 'services/helpers';

export const BottomNav = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const { name, avatarCloudURL } = useTypeSelector(selectUser);

  useEffect(() => {
    switch (value) {
      case 0:
        navigate(routes.HOME);
        break;
      case 1:
        navigate(routes.REQUEST);
        break;
      case 2:
        navigate(routes.PROFILE);
        break;
      default:
        navigate(routes.HOME);
    }
  }, [navigate, value]);

  return (
    <Box sx={{ width: '100%' }}>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            sx={{ fontWeight: '700' }}
            disableRipple
            label={btn.HOME}
            icon={<HomeIcon sx={{ fontSize: 28 }} />}
          />
          <BottomNavigationAction
            sx={{ fontWeight: '700' }}
            disableRipple
            label={btn.REQUEST}
            icon={<AddIcon sx={{ fontSize: 32 }} />}
          />
          <BottomNavigationAction
            sx={{ fontWeight: '700' }}
            disableRipple
            label={name ? formatName(name) : btn.PROFILE}
            icon={
              avatarCloudURL ? (
                <Avatar
                  alt={name ?? 'PROFILE'}
                  src={avatarCloudURL}
                  sx={{ width: 28, height: 28 }}
                />
              ) : (
                <UserIcon sx={{ fontSize: 28 }} />
              )
            }
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};
