import {
  CardContent,
  CardActions,
  Collapse,
  Typography,
  Button,
} from '@mui/material';

import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { CancelForm } from '../../Form/CancelForm/CancelForm';
import { getRestOfDays } from 'services/helpers';
import { ProposalStatusBack } from 'interfaces/data/proposal/IProposal';

interface ICardControlAcceptedProps {
  _id: string;
  ownerDate: any;
  statusProposal?: ProposalStatusBack;
}

export const CardControlAccepted = ({
  _id,
  ownerDate,
  statusProposal,
}: ICardControlAcceptedProps) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);

  const handleExpandMore = () => {
    setExpanded(!expanded);
  };

  const restDays = getRestOfDays(ownerDate);

  return (
    <>
      <CardActions
        disableSpacing
        style={{
          height: '34px',
          padding: '6px 8px 6px 8px',
          justifyContent: statusProposal ? 'flex-end' : 'space-between',
          backgroundColor: theme.palette.info.main,
        }}
      >
        <Typography
          variant="overline"
          style={{ lineHeight: '1.2', fontSize: '14px' }}
        >
          {statusProposal === ProposalStatusBack.cancelled
            ? statusProposal
            : statusProposal === ProposalStatusBack.accepted
            ? `past accepted | ${ownerDate}`
            : statusProposal === ProposalStatusBack.pending
            ? `without offer | ${ownerDate}`
            : statusProposal === ProposalStatusBack.reservation
            ? `without your decision | ${ownerDate}`
            : restDays}
        </Typography>

        {!statusProposal && (
          <Button
            onClick={handleExpandMore}
            style={{ height: '22px' }}
            size="small"
            type="button"
            variant="contained"
            color="secondary"
          >
            CANCEL
          </Button>
        )}
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent
          style={{
            padding: '8px',
          }}
        >
          {expanded && (
            <CancelForm handleExpandClose={handleExpandMore} _id={_id} />
          )}
        </CardContent>
      </Collapse>
    </>
  );
};
