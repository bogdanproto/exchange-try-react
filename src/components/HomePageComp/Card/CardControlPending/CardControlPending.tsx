import { CardContent, CardActions, Collapse, Typography } from '@mui/material';

import { useState } from 'react';
import { OfferForm } from '../../Form/OfferForm/OfferForm';
import { ICardControlPending, IEqptItem } from 'interfaces';
import { CardUserControl } from '../CardUserControl/CardUserControl';
import { useTheme } from '@mui/material/styles';
import { useTypeSelector } from 'services/redux/customHook/typeHooks';
import { selectUser } from 'services/redux/auth/selectors';
import { CardOwnerControl } from '../CardOwnerControl/CardOwnerControl';

export const CardControlPending = ({
  _id,
  ownerId,
  customerEqpts,
  customerTime,
  customerMsg,
}: ICardControlPending) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);
  const { _id: userId } = useTypeSelector(selectUser);

  const handleExpandMore = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <CardActions
        disableSpacing
        style={{
          height: '34px',
          padding: '6px 8px 6px 8px',
          justifyContent: 'space-between',
          backgroundColor: theme.palette.info.main,
        }}
      >
        <Typography
          variant="overline"
          style={{ lineHeight: '1.2', fontSize: '14px' }}
        >
          {userId === ownerId?._id ? 'your dicision' : 'awaiting dicision'}
        </Typography>

        {userId === ownerId?._id ? (
          <CardOwnerControl _id={_id} />
        ) : (
          <CardUserControl
            _id={_id}
            user={'customer'}
            handleExpandMore={handleExpandMore}
          />
        )}
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent
          style={{
            padding: '8px',
          }}
        >
          {expanded && (
            <OfferForm
              handleExpandClose={handleExpandMore}
              _id={_id}
              customerEqpts={customerEqpts.map(({ _id }: IEqptItem) => _id)}
              customerTime={customerTime}
              customerMsg={customerMsg}
            />
          )}
        </CardContent>
      </Collapse>
    </>
  );
};
