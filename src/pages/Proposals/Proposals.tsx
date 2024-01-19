import { Box } from '@mui/material';
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
import { CardProposal } from 'components/HomePageComp';

export const Proposals = () => {
  const proposals = useTypeSelector(selectProposals);
  const filter = useTypeSelector(selectFilterProposal);
  const dispatch = useTypeDispatch();

  useEffect(() => {
    const ctrl = new AbortController();
    dispatch(
      getAllProposal({ ...filter, page: 1, limit: 10, signal: ctrl.signal })
    );

    return () => {
      ctrl.abort();
    };
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
              <CardProposal
                key={_id}
                _id={_id}
                ownerId={ownerId}
                ownerEqpts={ownerEqpts}
                ownerDate={ownerDate}
                ownerTime={ownerTime}
                ownerMsg={ownerMsg}
                spot={spot}
                isShowPhone={isShowPhone}
              />
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
