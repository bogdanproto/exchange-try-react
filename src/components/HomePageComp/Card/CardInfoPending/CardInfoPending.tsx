import { CardContent, Box, Typography } from '@mui/material';
import { ICardInfoProposalPending } from 'interfaces';
import { CardPendingUserContent } from '../CardPendingUserContent/CardPendingUserContent';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import dayjs from 'dayjs';

export const CardInfoPending = ({
  ownerId,
  ownerEqpts,
  ownerDate,
  ownerTime,
  customerId,
  customerEqpts,
  customerTime,
  statusProposal,
  spot: { spot },
}: ICardInfoProposalPending) => {
  return (
    <CardContent sx={{ padding: '6px' }}>
      <Box
        display="flex"
        justifyContent="right"
        alignItems="center"
        gap="6px"
        marginBottom="10px"
      >
        <Typography
          variant="overline"
          style={{ lineHeight: '1.2', fontSize: '16px' }}
        >
          {spot ? spot : 'nospot'}
        </Typography>
        <Typography
          variant="overline"
          style={{ lineHeight: '1.2', fontSize: '16px' }}
        >
          {`${dayjs(ownerDate, { format: 'YYYY-MM-DD' }).format(
            'DD.MM.YYYY'
          )} ${statusProposal === 'accepted' ? customerTime : ownerTime}`}
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="stretch"
        gap="4px"
      >
        <CardPendingUserContent user={customerId} userEqpts={customerEqpts} />
        <Box display="flex" alignItems="center">
          {statusProposal === 'accepted' ? (
            <PublishedWithChangesIcon color="disabled" />
          ) : (
            <KeyboardDoubleArrowRightIcon color="disabled" />
          )}
        </Box>
        <CardPendingUserContent user={ownerId} userEqpts={ownerEqpts} />
      </Box>
    </CardContent>
  );
};
