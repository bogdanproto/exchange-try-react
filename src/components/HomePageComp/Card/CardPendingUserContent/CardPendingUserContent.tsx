import { Box, Avatar, Typography, Paper } from '@mui/material';
import { ICardPendingUser, IEqpt } from 'interfaces';

export const CardPendingUserContent = ({
  user: { name, avatarCloudURL, experience },
  userEqpts,
}: ICardPendingUser) => {
  return (
    <Paper
      elevation={4}
      style={{
        borderRadius: '6px',
        width: '50%',
        height: 'auto',
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        style={{
          padding: '6px',
        }}
      >
        <Box
          display="flex"
          gap="6px"
          justifyContent="left"
          alignItems="center"
          style={{
            minHeight: '40px',
          }}
        >
          <Avatar
            alt={name}
            src={avatarCloudURL}
            sx={{ width: 32, height: 32 }}
          />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="left"
            alignItems="left"
          >
            <Typography
              variant="overline"
              style={{ lineHeight: '1.5', fontSize: '10px' }}
            >
              {name ? name : 'noname'}
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              style={{ lineHeight: '1.2', fontSize: '8px' }}
            >
              {experience
                ? `${experience} year expirience`
                : 'without expirience'}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="left"
        alignItems="left"
        style={{
          padding: '6px',
          borderRadius: '0 0 6px 6px',
        }}
      >
        {userEqpts.length > 0 &&
          userEqpts?.map(({ _id, title, size }: IEqpt) => (
            <Typography
              key={_id}
              variant="body2"
              color="text.secondary"
              style={{ fontSize: '10px', lineHeight: '1.2' }}
            >
              {title} {size}
            </Typography>
          ))}
      </Box>
    </Paper>
  );
};
