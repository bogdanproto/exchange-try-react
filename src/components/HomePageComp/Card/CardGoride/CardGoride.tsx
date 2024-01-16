import { Card, Box, Paper } from '@mui/material';
import {
  CardControlAccepted,
  CardControlHistory,
  CardInfoPending,
} from 'components/HomePageComp';
import { IEqptItem, ISpotView, IUserView } from 'interfaces';
import { ProposalStatusBack } from 'interfaces/data/proposal/IProposal';
import { useState } from 'react';

interface CardGorideProps {
  _id: string;
  ownerId: IUserView;
  ownerEqpts: IEqptItem[] | [];
  spot: ISpotView;
  ownerDate: string;
  ownerTime: string;
  ownerMsg: string | null;
  customerId: IUserView;
  customerEqpts: IEqptItem[] | [];
  customerTime: string | null;
  customerMsg: string | null;
  statusProposal: ProposalStatusBack;
}

export const CardGoride = ({
  _id,
  ownerId,
  ownerEqpts,
  ownerDate,
  ownerTime,
  ownerMsg,
  spot,
  customerId,
  customerEqpts,
  customerTime,
  customerMsg,
  statusProposal,
}: CardGorideProps) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandMore = () => {
    setExpanded(!expanded);
  };

  return (
    <Paper
      key={_id}
      elevation={2}
      style={{
        padding: '4px',
        borderRadius: '10px',
      }}
    >
      <Card sx={{ borderRadius: '10px' }}>
        <CardControlAccepted _id={_id} ownerDate={ownerDate} />
        <Box onClick={handleExpandMore}>
          <CardInfoPending
            ownerId={ownerId}
            ownerEqpts={ownerEqpts}
            ownerDate={ownerDate}
            ownerTime={ownerTime}
            spot={spot}
            customerId={customerId}
            customerEqpts={customerEqpts}
            customerTime={customerTime}
            statusProposal={statusProposal}
          />
          <CardControlHistory
            ownerId={ownerId}
            ownerMsg={ownerMsg}
            ownerTime={ownerTime}
            customerId={customerId}
            customerMsg={customerMsg}
            customerTime={customerTime}
            expanded={expanded}
          />
        </Box>
      </Card>
    </Paper>
  );
};
