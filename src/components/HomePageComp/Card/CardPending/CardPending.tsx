import { Card, Box, Paper } from '@mui/material';
import {
  CardControlHistory,
  CardControlPending,
  CardInfoPending,
} from 'components/HomePageComp';
import { IEqptItem, ISpotView, IUserView } from 'interfaces';
import { useState } from 'react';

interface CardPendingProps {
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
}

export const CardPending = ({
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
}: CardPendingProps) => {
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
        <CardControlPending
          _id={_id}
          ownerId={ownerId}
          customerId={customerId}
          customerEqpts={customerEqpts}
          customerTime={customerTime}
          customerMsg={customerMsg}
        />
        <Box onClick={handleExpandMore}>
          <CardInfoPending
            ownerId={ownerId}
            ownerEqpts={ownerEqpts}
            ownerDate={ownerDate}
            ownerTime={ownerTime}
            spot={spot}
            customerId={customerId}
            customerEqpts={customerEqpts}
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
