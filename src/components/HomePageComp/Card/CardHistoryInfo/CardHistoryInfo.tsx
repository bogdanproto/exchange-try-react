import { Box, Typography, Paper } from '@mui/material';
import { ICardControlHistory } from 'interfaces';

export const CardHistoryInfo = ({
  ownerId,
  ownerMsg,
  ownerTime,
  customerId,
  customerMsg,
  customerTime,
  cancelUser,
  cancelMsg,
}: ICardControlHistory) => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="left"
        alignItems="left"
      >
        <Typography
          variant="overline"
          color="text.secondary"
          style={{ lineHeight: '1.5', fontSize: '12px' }}
        >
          proposal from:
        </Typography>

        {ownerId?.name && (
          <Typography
            variant="caption"
            color="text.secondary"
            style={{ lineHeight: '1.0', fontSize: '12px' }}
          >
            {ownerId.name}
          </Typography>
        )}
        {ownerId?.phone && (
          <Typography
            variant="caption"
            color="text.secondary"
            style={{ lineHeight: '1.0', fontSize: '12px' }}
          >
            {`Phone: ${ownerId.phone}`}
          </Typography>
        )}
        {ownerTime && (
          <Typography
            variant="caption"
            color="text.secondary"
            style={{ lineHeight: '1.0', fontSize: '12px' }}
          >
            {`Time: ${ownerTime}`}
          </Typography>
        )}

        <Typography
          variant="caption"
          color="text.secondary"
          style={{ fontSize: '12px', lineHeight: '1.0' }}
        >
          {`Message: ${ownerMsg ? ownerMsg : 'no massage'}`}
        </Typography>

        {customerId && (
          <>
            <Box sx={{ marginTop: '12px' }}></Box>
            <Typography
              variant="overline"
              color="text.secondary"
              style={{ lineHeight: '1.5', fontSize: '12px' }}
            >
              offer from:
            </Typography>
            {customerId?.name && (
              <Typography
                variant="caption"
                color="text.secondary"
                style={{ lineHeight: '1.0', fontSize: '12px' }}
              >
                {customerId.name}
              </Typography>
            )}
            {customerId?.phone && (
              <Typography
                variant="caption"
                color="text.secondary"
                style={{ lineHeight: '1.0', fontSize: '12px' }}
              >
                {`Phone: ${customerId.phone}`}
              </Typography>
            )}
            <Typography
              variant="caption"
              color="text.secondary"
              style={{ lineHeight: '1.0', fontSize: '12px' }}
            >
              {`Time: ${customerTime}`}
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              style={{ lineHeight: '1.0', fontSize: '12px' }}
            >
              {`Message: ${customerMsg ? customerMsg : 'no massage'}`}
            </Typography>
          </>
        )}
      </Box>
      {cancelUser && (
        <Paper style={{ marginTop: '8px', padding: '4px' }} elevation={0}>
          <Typography
            variant="h6"
            color="text.secondary"
            style={{ lineHeight: '1.0', fontSize: '12px' }}
          >
            {`Cancelled by  ${cancelUser?.name}`}
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            style={{ fontSize: '12px' }}
          >
            {`Reason: ${cancelMsg ? cancelMsg : 'no massage'}`}
          </Typography>
        </Paper>
      )}
    </>
  );
};
