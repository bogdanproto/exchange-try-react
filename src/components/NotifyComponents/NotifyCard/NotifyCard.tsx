import { INotify } from 'interfaces';
import { Paper, Typography, Avatar } from '@mui/material';

export const NotifyCard = ({ message, statusNotify, createdAt }: INotify) => {
  return (
    <>
      <Paper
        elevation={20}
        sx={{
          minHeight: '96px',
          display: 'flex',
          gap: '8px',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '14px',
        }}
      >
        <Avatar alt={'Bogdan'} src={'null'} sx={{ width: 48, height: 48 }} />
        <Typography
          variant="body2"
          style={{ lineHeight: '1.2', fontSize: '14px' }}
          color={statusNotify === 'viewed' ? 'text.secondary' : 'text.main'}
        >
          {message}
        </Typography>
      </Paper>
    </>
  );
};
