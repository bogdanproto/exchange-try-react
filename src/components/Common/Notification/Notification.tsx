import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { IPropsNotification } from '../../../interfaces/compInterfaces';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const NotificationBox = ({ type, message }: IPropsNotification) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) =>
    setOpen(false);

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};
