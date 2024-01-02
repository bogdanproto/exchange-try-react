import { Card, Box, Paper } from '@mui/material';
import { CardControl, CardInfo } from 'components/HomePageComp';
import { IProposal } from 'interfaces';
import { useTypeSelector } from 'services/redux/customHook/typeHooks';
import { selectProposals } from 'services/redux/data/selectors';

export const Proposals = () => {
  const proposals = useTypeSelector(selectProposals);

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
            isShowPhone,
            isAutoAccept,
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
                <CardInfo
                  ownerId={ownerId}
                  ownerEqpts={ownerEqpts}
                  ownerDate={ownerDate}
                  ownerTime={ownerTime}
                  spot={spot}
                />
                <CardControl
                  _id={_id}
                  ownerId={ownerId}
                  ownerMsg={ownerMsg}
                  ownerEqpts={ownerEqpts}
                  ownerDate={ownerDate}
                  ownerTime={ownerTime}
                  spot={spot}
                  isShowPhone={isShowPhone}
                  isAutoAccept={isAutoAccept}
                />
              </Card>
            </Paper>
          )
        )}
    </Box>
  );
};
