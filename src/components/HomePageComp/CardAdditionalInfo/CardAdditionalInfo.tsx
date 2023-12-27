import { Box, Typography } from '@mui/material';
import { ICardAdditionalProposal } from 'interfaces';

export const CardAdditionalInfo = ({
  ownerId,
  ownerMsg,
}: ICardAdditionalProposal) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="left"
      alignItems="left"
    >
      {ownerId?.phone && (
        <Typography
          variant="caption"
          color="text.secondary"
          style={{ lineHeight: '1.0', fontSize: '12px' }}
        >
          {`Phone: ${ownerId.phone}`}
        </Typography>
      )}

      {ownerMsg && (
        <Typography
          variant="caption"
          color="text.secondary"
          style={{ fontSize: '12px' }}
        >
          {`Message: ${ownerMsg}`}
        </Typography>
      )}

      {!ownerId.phone && !ownerMsg && (
        <Typography
          variant="caption"
          color="text.secondary"
          style={{ lineHeight: '1.0', fontSize: '12px' }}
        >
          No additional information
        </Typography>
      )}
    </Box>
  );
};
