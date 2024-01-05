import {
  CardContent,
  CardActions,
  Collapse,
  Typography,
  Box,
} from '@mui/material';

import { useState } from 'react';
import { OfferForm } from '../OfferForm/OfferForm';
import { CardAdditionalInfo } from '../CardAdditionalInfo/CardAdditionalInfo';
import { ICardControlPending, IEqptItem } from 'interfaces';
import { CardOwnerControl } from '../CardOwnerControl/CardOwnerControl';
import { ProposalForm } from 'components/ProposalPageComp/ProposalForm/ProposalForm';
import { useTheme } from '@mui/material/styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export const CardControlPending = ({
  _id,
  ownerId,
  customerId,
  customerEqpts,
  customerTime,
  customerMsg,
}: ICardControlPending) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);

  const handleExpandMore = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <CardActions
        disableSpacing
        style={{
          padding: '6px',
          justifyContent: 'space-between',
          backgroundColor: theme.palette.info.main,
        }}
      >
        <Box display="flex" justifyContent="left" alignItems="center" gap="2px">
          <AccessTimeIcon style={{ fontSize: '14px' }} />

          <Typography
            variant="caption"
            style={{ lineHeight: '1.2', fontSize: '14px' }}
          >
            awaiting dicision
          </Typography>
        </Box>
        <CardOwnerControl _id={_id} handleExpandMore={handleExpandMore} />
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent
          style={{
            padding: '8px',
          }}
        >
          {expanded && (
            <OfferForm handleExpandClose={handleExpandMore} _id={_id} />
          )}
        </CardContent>
      </Collapse>
    </>
  );
};
