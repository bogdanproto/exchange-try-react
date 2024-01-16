import { Box } from '@mui/material';
import { NoData } from 'components/Common';
import { CardGoride } from 'components/HomePageComp';
import { IProposal } from 'interfaces';
import { useEffect } from 'react';
import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import { getAllProposalAccepted } from 'services/redux/data/operations';
import { selectProposalAccepted } from 'services/redux/data/selectors';

export const Goride = () => {
  const proposals = useTypeSelector(selectProposalAccepted);
  const dispatch = useTypeDispatch();

  useEffect(() => {
    dispatch(getAllProposalAccepted());
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      {proposals.length > 0 ? (
        proposals?.map(
          ({
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
          }: IProposal) => (
            <CardGoride
              key={_id}
              _id={_id}
              ownerId={ownerId}
              ownerEqpts={ownerEqpts}
              ownerDate={ownerDate}
              ownerTime={ownerTime}
              ownerMsg={ownerMsg}
              spot={spot}
              customerId={customerId}
              customerEqpts={customerEqpts}
              customerTime={customerTime}
              customerMsg={customerMsg}
              statusProposal={statusProposal}
            />
          )
        )
      ) : (
        <NoData />
      )}
    </Box>
  );
};
