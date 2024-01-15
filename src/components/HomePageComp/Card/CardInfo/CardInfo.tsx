import { CardContent, Box, Avatar, Typography, Paper } from '@mui/material';
import dayjs from 'dayjs';
import { ICardInfoProposal, IEqpt } from 'interfaces';

export const CardInfo = ({
  ownerId: { name, avatarCloudURL, experience },
  ownerEqpts,
  ownerDate,
  ownerTime,
  spot: { spot },
}: ICardInfoProposal) => {
  return (
    <>
      <CardContent style={{ padding: '8px' }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box
            display="flex"
            gap="6px"
            justifyContent="left"
            alignItems="center"
          >
            <Avatar alt={name} src={avatarCloudURL} />
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="left"
              alignItems="left"
            >
              <Typography
                variant="overline"
                style={{ lineHeight: '1.0', fontSize: '12px' }}
              >
                {name ? name : 'noname'}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                style={{ fontSize: '10px' }}
              >
                {experience
                  ? `${experience} year expirience`
                  : 'without expirience'}
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="left"
            alignItems="left"
          >
            <Typography
              variant="overline"
              style={{ lineHeight: '1.2', fontSize: '14px' }}
            >
              {`${dayjs(ownerDate, { format: 'YYYY-MM-DD' }).format(
                'DD.MM.YYYY'
              )} ${ownerTime}`}
            </Typography>
            <Typography
              variant="overline"
              style={{ lineHeight: '1.1', fontSize: '14px' }}
            >
              {spot ? spot : 'nospot'}
            </Typography>
          </Box>
        </Box>
      </CardContent>

      <Paper
        elevation={2}
        style={{
          padding: '8px',
          borderRadius: '0 0 6px 6px',
        }}
      >
        <Typography variant="caption" color="text.secondary">
          {ownerEqpts.length > 0 &&
            ownerEqpts
              ?.map(({ title, size }: IEqpt) => `${title} ${size}`)
              .join(', ')}
        </Typography>
      </Paper>
    </>
  );
};
