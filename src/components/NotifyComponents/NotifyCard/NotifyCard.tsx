import { INotify } from 'interfaces';
import { Paper, Typography, Avatar, Box } from '@mui/material';
import { getDifferenceTime } from 'services/helpers';

export const NotifyCard = ({
  initiator,
  message,
  statusNotify,
  createdAt,
}: INotify) => {
  return (
    <>
      <Paper
        elevation={statusNotify === 'viewed' ? 5 : 20}
        sx={{
          position: 'relative',
          minHeight: '96px',
          display: 'flex',
          gap: '8px',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '14px',
        }}
      >
        <Avatar
          alt={initiator.name}
          src={initiator.avatarCloudURL || ''}
          sx={{ width: 48, height: 48 }}
        />
        <Typography
          variant="body2"
          style={{ lineHeight: '1.2', fontSize: '14px' }}
          color={statusNotify === 'viewed' ? 'text.secondary' : 'text.main'}
        >
          {message}
        </Typography>
        <Box sx={{ position: 'absolute', top: '8px', right: '8px' }}>
          <Typography
            variant="body2"
            style={{ lineHeight: '1.2', fontSize: '12px' }}
            color={statusNotify === 'viewed' ? 'text.secondary' : 'text.main'}
          >
            {getDifferenceTime(createdAt)}
          </Typography>
        </Box>
      </Paper>
    </>
  );
};
