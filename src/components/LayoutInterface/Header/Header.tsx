import { AppBar, Box, Toolbar, Stack } from '@mui/material';
import { SelectHeader } from '../../Common/Inputs/SelectHeader/SelectHeader';
import { Drawer } from 'components/DrawerComponent';

export const Header = () => {
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
          <Stack direction="row" gap="10px">
            <Drawer />
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
