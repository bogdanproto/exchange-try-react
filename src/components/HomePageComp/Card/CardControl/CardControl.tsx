import {
  CardContent,
  CardActions,
  Collapse,
  Button,
  Typography,
} from '@mui/material';

import { useState } from 'react';
import { OfferForm } from '../../Form/OfferForm/OfferForm';
import { ICardControlProposal, IEqptItem } from 'interfaces';
import { useTypeSelector } from 'services/redux/customHook/typeHooks';
import { selectUser } from 'services/redux/auth/selectors/selectors';
import { CardUserControl } from '../CardUserControl/CardUserControl';
import { ProposalForm } from 'components/ProposalPageComp/ProposalForm/ProposalForm';
import { useTheme } from '@mui/material/styles';
import dayjs from 'dayjs';

export type SwitcherType = 'offer' | 'edit' | '';

export const CardControl = ({
  ownerId,
  ownerMsg,
  ownerEqpts,
  ownerDate,
  ownerTime,
  isShowPhone,
  spot,
  _id,
}: ICardControlProposal) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);
  const [switchCollaps, setswitchCollaps] = useState<SwitcherType>('');
  const { _id: userId } = useTypeSelector(selectUser);

  const handleExpandMore = (switcher: SwitcherType) => {
    if (!expanded) {
      setswitchCollaps(switcher);
    }

    setExpanded(!expanded);
  };

  const handleExpandClose = () => {
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
          {`${dayjs(ownerDate).format('DD-MM-YYYY')} ${ownerTime}`}
        </Typography>

        {userId === ownerId._id ? (
          <CardUserControl
            _id={_id}
            user={'owner'}
            handleExpandMore={handleExpandMore}
          />
        ) : (
          <Button
            onClick={() => handleExpandMore('offer')}
            style={{ height: '22px' }}
            size="small"
            type="button"
            variant="contained"
            color="secondary"
          >
            OFFER
          </Button>
        )}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent
          style={{
            padding: '14px',
          }}
        >
          {switchCollaps === 'offer' ? (
            <OfferForm handleExpandClose={handleExpandClose} _id={_id} />
          ) : (
            <ProposalForm
              _id={_id}
              ownerMsg={ownerMsg}
              ownerEqpts={ownerEqpts.map(({ _id }: IEqptItem) => _id)}
              ownerSpot={spot}
              ownerDate={ownerDate}
              ownerTime={ownerTime}
              ownerisShowPhone={isShowPhone}
              handleExpandClose={handleExpandClose}
            />
          )}
        </CardContent>
      </Collapse>
    </>
  );
};
