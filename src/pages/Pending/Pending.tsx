import { Box } from '@mui/material';
import { NoData } from 'components/Common';
import { CardPending } from 'components/HomePageComp';
import { IProposal } from 'interfaces';
import { useEffect } from 'react';
import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import { getAllProposalPending } from 'services/redux/data/operations';
import { selectProposalsPending } from 'services/redux/data/selectors';

export const Pending = () => {
  const proposals = useTypeSelector(selectProposalsPending);
  const dispatch = useTypeDispatch();

  useEffect(() => {
    dispatch(getAllProposalPending());
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
          }: IProposal) => (
            <CardPending
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
            />
          )
        )
      ) : (
        <NoData />
      )}
    </Box>
  );
};
