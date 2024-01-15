import { CardContent, CardActions, Collapse, Button } from '@mui/material';
import { useState } from 'react';
import { ICardControlHistory } from 'interfaces';
import { CardHistoryInfo } from '../CardHistoryInfo/CardHistoryInfo';

export const CardControlHistory = ({
  ownerId,
  ownerMsg,
  ownerTime,
  customerId,
  customerMsg,
  customerTime,
  cancelUser,
  cancelMsg,
}: ICardControlHistory) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandMore = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent
          style={{
            padding: '14px',
          }}
        >
          <CardHistoryInfo
            ownerId={ownerId}
            ownerMsg={ownerMsg}
            ownerTime={ownerTime}
            customerId={customerId}
            customerMsg={customerMsg}
            customerTime={customerTime}
            cancelUser={cancelUser}
            cancelMsg={cancelMsg}
          />
        </CardContent>
      </Collapse>
      <CardActions
        disableSpacing
        style={{
          justifyContent: 'center',
          paddingBottom: '6px',
          paddingTop: '6px',
        }}
      >
        <Button
          variant="contained"
          style={{
            width: '8px',
            padding: '2px',
          }}
          color="warning"
          onClick={handleExpandMore}
        />
      </CardActions>
    </>
  );
};
