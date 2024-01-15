import { Card, Box, Paper } from '@mui/material';
import { NoData } from 'components/Common';
import {
  CardControlHistory,
  CardControlPending,
  CardInfoPending,
} from 'components/HomePageComp';
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
            <Paper
              key={_id}
              elevation={2}
              style={{
                padding: '4px',
                borderRadius: '10px',
              }}
            >
              <Card sx={{ borderRadius: '10px' }}>
                <CardControlPending
                  _id={_id}
                  ownerId={ownerId}
                  customerId={customerId}
                  customerEqpts={customerEqpts}
                  customerTime={customerTime}
                  customerMsg={customerMsg}
                />
                <CardInfoPending
                  ownerId={ownerId}
                  ownerEqpts={ownerEqpts}
                  ownerDate={ownerDate}
                  ownerTime={ownerTime}
                  spot={spot}
                  customerId={customerId}
                  customerEqpts={customerEqpts}
                />
                <CardControlHistory
                  ownerId={ownerId}
                  ownerMsg={ownerMsg}
                  ownerTime={ownerTime}
                  customerId={customerId}
                  customerMsg={customerMsg}
                  customerTime={customerTime}
                />
              </Card>
            </Paper>
          )
        )
      ) : (
        <NoData />
      )}
    </Box>
  );
};
