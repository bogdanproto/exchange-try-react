import { Card, Box, Paper } from '@mui/material';
import {
  CardControlAccepted,
  CardControlHistory,
  CardInfoPending,
} from 'components/HomePageComp';
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
      {proposals.length > 0 &&
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
            <Paper
              key={_id}
              elevation={2}
              style={{
                padding: '8px',
                borderRadius: '10px',
              }}
            >
              <Card sx={{ borderRadius: '10px' }}>
                <CardControlAccepted _id={_id} ownerDate={ownerDate} />
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
                />
              </Card>
            </Paper>
          )
        )}
    </Box>
  );
};
