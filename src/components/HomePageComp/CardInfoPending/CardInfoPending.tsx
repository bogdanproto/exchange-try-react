import { CardContent, Box, Typography } from '@mui/material';
import { ICardInfoProposalPending } from 'interfaces';
import { CardPendingUserContent } from '../CardPendingUserContent/CardPendingUserContent';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import dayjs from 'dayjs';

export const CardInfoPending = ({
  ownerId,
  ownerEqpts,
  ownerDate,
  ownerTime,
  customerId,
  customerEqpts,
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
          )} ${ownerTime}`}
        </Typography>
      </Box>

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <CardPendingUserContent user={customerId} userEqpts={customerEqpts} />
        <KeyboardDoubleArrowRightIcon color="disabled" />
        <CardPendingUserContent user={ownerId} userEqpts={ownerEqpts} />
      </Box>
    </CardContent>
  );
};
