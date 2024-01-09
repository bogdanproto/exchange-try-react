import {
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Button,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { OfferForm } from '../../Form/OfferForm/OfferForm';
import { CardAdditionalInfo } from '../CardAdditionalInfo/CardAdditionalInfo';
import { ICardControlProposal, IEqptItem } from 'interfaces';
import { useTypeSelector } from 'services/redux/customHook/typeHooks';
import { selectUser } from 'services/redux/auth/selectors';
import { CardUserControl } from '../CardUserControl/CardUserControl';
import { ProposalForm } from 'components/ProposalPageComp/ProposalForm/ProposalForm';

export type SwitcherType = 'offer' | 'edit' | 'more' | '';

export const CardControl = ({
  ownerId,
  ownerMsg,
  ownerEqpts,
  ownerDate,
  ownerTime,
  isShowPhone,
  isAutoAccept,
  spot,
  _id,
}: ICardControlProposal) => {
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
        style={{ padding: '4px', justifyContent: 'space-between' }}
      >
        <IconButton
          style={{ padding: '0' }}
          onClick={() => handleExpandMore('more')}
        >
          <ExpandMoreIcon />
        </IconButton>

        {userId === ownerId._id ? (
          <CardUserControl
            _id={_id}
            user={'owner'}
            handleExpandMore={handleExpandMore}
          />
        ) : (
          <Button
            style={{ padding: '0', fontWeight: 'bold' }}
            onClick={() => handleExpandMore('offer')}
          >
            OFFER
          </Button>
        )}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent
          style={{
            padding: '0 14px 14px 14px',
          }}
        >
          {switchCollaps === 'offer' ? (
            <OfferForm handleExpandClose={handleExpandClose} _id={_id} />
          ) : switchCollaps === 'edit' ? (
            <ProposalForm
              _id={_id}
              ownerMsg={ownerMsg}
              ownerEqpts={ownerEqpts.map(({ _id }: IEqptItem) => _id)}
              ownerSpot={spot._id}
              ownerDate={ownerDate}
              ownerTime={ownerTime}
              ownerisShowPhone={isShowPhone}
              ownerisAutoAccept={isAutoAccept}
              handleExpandClose={handleExpandClose}
            />
          ) : (
            <CardAdditionalInfo ownerId={ownerId} ownerMsg={ownerMsg} />
          )}
        </CardContent>
      </Collapse>
    </>
  );
};
