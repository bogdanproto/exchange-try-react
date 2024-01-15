import { IProposalHistory } from 'interfaces/data/proposal/IProposal';
import { useEffect } from 'react';
import { Box, Paper, Card } from '@mui/material';
import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import { getAllHistoryProposal } from 'services/redux/data/operations';
import { selectFilteredHistoryProposals } from 'services/redux/data/selectors';
import {
  CardControlAccepted,
  CardControlHistory,
  CardInfoPending,
} from 'components/HomePageComp';
import { FilterHistoryProposals, NoData } from 'components/Common';

export const PastProposalsInterFace = () => {
  const dispatch = useTypeDispatch();
  const proposals = useTypeSelector(selectFilteredHistoryProposals);

  useEffect(() => {
    dispatch(getAllHistoryProposal());
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
              <Paper
                key={_id}
                elevation={2}
                style={{
                  padding: '4px',
                  borderRadius: '10px',
                }}
              >
                <Card sx={{ borderRadius: '10px' }}>
                  <CardControlAccepted
                    _id={_id}
                    ownerDate={ownerDate}
                    statusProposal={statusProposal}
                  />
                  <CardInfoPending
                    ownerId={ownerId}
                    ownerEqpts={ownerEqpts}
                    ownerDate={ownerDate}
                    ownerTime={ownerTime}
                    spot={spot}
                    customerId={customerId}
                    customerEqpts={customerEqpts}
                    customerTime={customerTime}
                    statusProposal={statusProposal}
                  />
                  <CardControlHistory
                    ownerId={ownerId}
                    ownerMsg={ownerMsg}
                    ownerTime={ownerTime}
                    customerId={customerId}
                    customerMsg={customerMsg}
                    customerTime={customerTime}
                    cancelUser={cancelUser}
                    cancelMsg={cancelMsg}
                  />
                </Card>
              </Paper>
            )
          )
        ) : (
          <NoData />
        )}
      </Box>
    </>
  );
};
