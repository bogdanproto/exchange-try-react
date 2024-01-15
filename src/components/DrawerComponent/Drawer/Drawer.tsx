import { SwipeableDrawer, IconButton } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import { useState } from 'react';
// import { Notifications } from '@mui/icons-material';
import { DrawerBox } from '../DrawerBox/DrawerBox';
import { PastProposalsInterFace } from '../../PastProposalsInterFace/PastProposalsInterFace';
import { useTheme } from '@mui/material/styles';

export const Drawer = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <IconButton style={{ padding: '0' }} onClick={toggleDrawer}>
        <HistoryIcon sx={{ fontSize: 24 }} color="warning" />
      </IconButton>

      {/* <Badge badgeContent={1} color="primary">
        <Notifications sx={{ fontSize: 24 }} color="success" />
      </Badge> */}

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
            <PastProposalsInterFace />
          </DrawerBox>
        )}
      </SwipeableDrawer>
    </>
  );
};
