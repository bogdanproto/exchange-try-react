import { Card, Box, Paper } from '@mui/material';
import { CardControl, CardInfo } from 'components/HomePageComp';
import { IProposal } from 'interfaces';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import { getAllProposal } from 'services/redux/data/operations';
import {
  selectFilterProposal,
  selectProposals,
} from 'services/redux/data/selectors';

export const Proposals = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const proposals = useTypeSelector(selectProposals);
  const filter = useTypeSelector(selectFilterProposal);
  const dispatch = useTypeDispatch();

  console.log(inView);

  useEffect(() => {
    if (inView) {
      const params = { ...filter, page: 1, limit: 10 };
      dispatch(getAllProposal(params));
    }
  }, [dispatch, filter, inView]);

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
                />
              </Card>
            </Paper>
          )
        )}
      <Box ref={ref} />
    </Box>
  );
};
