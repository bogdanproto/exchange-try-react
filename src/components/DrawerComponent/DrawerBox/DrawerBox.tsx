import { Box } from '@mui/material';
import { ReactNode } from 'react';

interface DrawerBoxProps {
  children?: ReactNode;
}
export const DrawerBox = ({ children }: DrawerBoxProps) => {
  return <Box sx={{ padding: '16px', paddingTop: '8px' }}>{children}</Box>;
};
