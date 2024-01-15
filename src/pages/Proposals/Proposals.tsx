import { Card, Box, Paper } from '@mui/material';
import {
  CardControl,
  CardControlHistory,
  CardInfo,
} from 'components/HomePageComp';
import { IProposal } from 'interfaces';
import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import {
  selectFilterProposal,
  selectProposals,
} from 'services/redux/data/selectors';
import { useEffect } from 'react';
import { getAllProposal } from 'services/redux/data/operations';
import { NoData, Observer } from 'components/Common';

export const Proposals = () => {
  const proposals = useTypeSelector(selectProposals);
  const filter = useTypeSelector(selectFilterProposal);
  const dispatch = useTypeDispatch();

  useEffect(() => {
    dispatch(getAllProposal({ ...filter, page: 1, limit: 10 }));
  }, [dispatch, filter]);

  return (
    <Box>
      {proposals.length > 0 ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {proposals?.map(
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
                  padding: '4px',
                  borderRadius: '10px',
                }}
              >
                <Card sx={{ borderRadius: '10px' }}>
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
                  <CardInfo
                    ownerId={ownerId}
                    ownerEqpts={ownerEqpts}
                    ownerDate={ownerDate}
                    ownerTime={ownerTime}
                    spot={spot}
                  />
                  <CardControlHistory ownerId={ownerId} ownerMsg={ownerMsg} />
                </Card>
              </Paper>
            )
          )}
          <Observer />
        </Box>
      ) : (
        <NoData />
      )}
    </Box>
  );
};
