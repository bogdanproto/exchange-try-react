import { IProposalHistory } from 'interfaces/data/proposal/IProposal';
import { useEffect } from 'react';
import { Box } from '@mui/material';
import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import { getAllHistoryProposal } from 'services/redux/data/operations';
import { selectFilteredHistoryProposals } from 'services/redux/data/selectors';
import { CardPast } from 'components/HomePageComp';
import { FilterHistoryProposals, NoData } from 'components/Common';

export const PastProposalsInterFace = () => {
  const dispatch = useTypeDispatch();
  const proposals = useTypeSelector(selectFilteredHistoryProposals);

  useEffect(() => {
    const ctrl = new AbortController();

    dispatch(getAllHistoryProposal(ctrl.signal));

    return () => {
      ctrl.abort();
    };
  }, [dispatch]);

  return (
    <>
      <FilterHistoryProposals />
      <Box
        style={{
          height: 'calc(100vh - 112px)',
          overflowY: 'scroll',
        }}
      >
        {proposals?.length > 0 ? (
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
              cancelUser,
              cancelMsg,
            }: IProposalHistory) => (
              <CardPast
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
                cancelUser={cancelUser}
                cancelMsg={cancelMsg}
              />
            )
          )
        ) : (
          <NoData />
        )}
      </Box>
    </>
  );
};
