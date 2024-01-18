import { CardContent, Box, Avatar, Typography, Paper } from '@mui/material';
import { ICardInfoProposal, IEqpt } from 'interfaces';
import { getDifferenceYears } from 'services/helpers';

export const CardInfo = ({
  ownerId: { name, avatarCloudURL, experience },
  ownerEqpts,
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
            sx={{ minWidth: '50%' }}
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
                style={{ lineHeight: '1.1', fontSize: '12px' }}
              >
                {name ? name : 'noname'}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                style={{ fontSize: '10px', lineHeight: '1.0' }}
              >
                {experience
                  ? `${getDifferenceYears(experience)} expirience`
                  : 'without expirience'}
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-start"
            sx={{ minWidth: '50%' }}
          >
            <Typography
              variant="overline"
              style={{
                lineHeight: '1.1',
                fontSize: '14px',
                textAlign: 'right',
              }}
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
