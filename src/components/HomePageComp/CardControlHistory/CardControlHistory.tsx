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
            padding: '0 14px 14px 14px',
          }}
        >
          <CardHistoryInfo
            ownerId={ownerId}
            ownerMsg={ownerMsg}
            ownerTime={ownerTime}
            customerId={customerId}
            customerMsg={customerMsg}
            customerTime={customerTime}
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
          color="success"
          style={{ width: '8px', padding: '2px' }}
          onClick={handleExpandMore}
        />
      </CardActions>
    </>
  );
};
