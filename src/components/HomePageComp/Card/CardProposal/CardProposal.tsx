import { Card, Box, Paper } from '@mui/material';
import {
  CardControl,
  CardControlHistory,
  CardInfo,
} from 'components/HomePageComp';
import { IEqptItem, ISpotView, IUserView } from 'interfaces';
import { useState } from 'react';

interface CardProposalProps {
  _id: string;
  ownerId: IUserView;
  ownerEqpts: IEqptItem[] | [];
  spot: ISpotView;
  ownerDate: string;
  ownerTime: string;
  ownerMsg: string | null;
  isShowPhone: boolean;
}

export const CardProposal = ({
  _id,
  ownerId,
  ownerEqpts,
  ownerDate,
  ownerTime,
  ownerMsg,
  spot,
  isShowPhone,
}: CardProposalProps) => {
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
        <CardControl
          _id={_id}
          ownerId={ownerId}
          ownerMsg={ownerMsg}
          ownerEqpts={ownerEqpts}
          ownerDate={ownerDate}
          ownerTime={ownerTime}
          spot={spot}
          isShowPhone={isShowPhone}
        />
        <Box onClick={handleExpandMore}>
          <CardInfo
            ownerId={ownerId}
            ownerEqpts={ownerEqpts}
            ownerDate={ownerDate}
            ownerTime={ownerTime}
            spot={spot}
          />

          <CardControlHistory
            ownerId={ownerId}
            ownerMsg={ownerMsg}
            expanded={expanded}
          />
        </Box>
      </Card>
    </Paper>
  );
};
