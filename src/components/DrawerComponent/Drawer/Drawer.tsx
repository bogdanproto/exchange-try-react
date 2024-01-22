import { SwipeableDrawer, IconButton, Badge } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import { useState } from 'react';
import { Notifications } from '@mui/icons-material';
import { DrawerBox } from '../DrawerBox/DrawerBox';
import { PastProposalsInterFace } from '../../PastProposalsInterFace/PastProposalsInterFace';
import { useTheme } from '@mui/material/styles';
import { useTypeSelector } from 'services/redux/customHook/typeHooks';
import { selectTotalNotViewedNotify } from 'services/redux/data/selectors';
import { NotifyInterface } from 'components/NotifyComponents';

enum MenuOptions {
  history = 'history',
  notify = 'notify',
}

export const Drawer = () => {
  const theme = useTheme();
  const notifyUnViewed = useTypeSelector(selectTotalNotViewedNotify);

  const [open, setOpen] = useState(false);
  const [option, setOption] = useState<MenuOptions | null>(null);

  const toggleDrawer = (option: MenuOptions | any) => {
    setOpen(!open);
    setOption(option);
  };

  return (
    <>
      <IconButton
        style={{ padding: '0' }}
        onClick={() => toggleDrawer(MenuOptions.history)}
      >
        <HistoryIcon sx={{ fontSize: 24 }} color="warning" />
      </IconButton>

      <IconButton
        style={{ padding: '0' }}
        onClick={() => toggleDrawer(MenuOptions.notify)}
      >
        <Badge badgeContent={notifyUnViewed} color="primary">
          <Notifications sx={{ fontSize: 24 }} color="warning" />
        </Badge>
      </IconButton>

      <SwipeableDrawer
        anchor={'bottom'}
        open={open}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
        PaperProps={{
          style: {
            backgroundColor: theme.palette.secondary.main,
            height: 'calc(100vh - 54px)',
            overflowY: 'hidden',
          },
        }}
      >
        {open && (
          <DrawerBox>
            {option === MenuOptions.history ? (
              <PastProposalsInterFace />
            ) : (
              <NotifyInterface />
            )}
          </DrawerBox>
        )}
      </SwipeableDrawer>
    </>
  );
};
