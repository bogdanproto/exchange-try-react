import { Card, Box, Paper } from '@mui/material';
import { CardControl, CardInfo } from 'components/HomePageComp';
import { IProposalPending } from 'interfaces';
import { useTypeSelector } from 'services/redux/customHook/typeHooks';
import { selectProposalsPending } from 'services/redux/data/selectors';
export const Proposals = () => {
  const proposalsPend = useTypeSelector(selectProposalsPending);
  console.log(proposalsPend);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      {proposalsPend.length > 0 &&
        proposalsPend?.map(
          ({
            _id,
            ownerId,
            ownerEqpts,
            ownerDate,
            ownerTime,
            spot,
          }: IProposalPending) => (
            <Paper
              key={_id}
              elevation={2}
              style={{
                padding: '8px',
                borderRadius: '10px',
              }}
            >
              <Card sx={{ borderRadius: '10px' }}>
                <CardInfo
                  ownerId={ownerId}
                  ownerEqpts={ownerEqpts}
                  ownerDate={ownerDate}
                  ownerTime={ownerTime}
                  spot={spot}
                />
                <CardControl />
              </Card>
            </Paper>
          )
        )}
    </Box>
  );
};
