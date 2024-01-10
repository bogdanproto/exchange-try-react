import {
  IProposalHistory,
  ProposalStatusBack,
} from 'interfaces/data/proposal/IProposal';
import { useEffect, useState } from 'react';
import {
  ToggleButtonGroup,
  ToggleButton,
  Box,
  Paper,
  Card,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import { getAllHistoryProposal } from 'services/redux/data/operations';
import { selectProposalHistory } from 'services/redux/data/selectors';
import {
  CardControlAccepted,
  CardControlHistory,
  CardInfoPending,
} from 'components/HomePageComp';

export const PastProposalsInterFace = () => {
  const theme = useTheme();
  const [filter, setFilter] = useState<ProposalStatusBack>(
    ProposalStatusBack.past
  );
  const dispatch = useTypeDispatch();
  const proposals = useTypeSelector(selectProposalHistory);

  useEffect(() => {
    dispatch(getAllHistoryProposal());
  }, [dispatch]);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    filter: ProposalStatusBack
  ) => {
    if (filter !== null) {
      setFilter(filter);
    }
  };
  return (
    <>
      <Box
        style={{
          position: 'relative',
          width: '100%',
          height: '34px',
          paddingLeft: '16px',
          paddingRight: '16px',
          paddingBottom: '2px',
          zIndex: '1110',
        }}
      >
        <ToggleButtonGroup
          color="primary"
          value={filter}
          exclusive
          onChange={handleChange}
          aria-label="Platform proposals"
          fullWidth
          size="small"
          style={{
            height: '28px',
            width: '70%',
            position: 'absolute',
            top: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: theme.palette.background.default,
          }}
        >
          <ToggleButton
            value={ProposalStatusBack.past}
            sx={{ fontWeight: 'bold' }}
          >
            {ProposalStatusBack.past}
          </ToggleButton>
          <ToggleButton
            value={ProposalStatusBack.cancelled}
            sx={{ fontWeight: 'bold' }}
          >
            {ProposalStatusBack.cancelled}
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Box
        style={{
          height: 'calc(100vh - 112px)',
          overflowY: 'scroll',
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
              cancelUser,
              cancelMsg,
            }: IProposalHistory) => (
              <Paper
                key={_id}
                elevation={2}
                style={{
                  padding: '8px',
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
          )}
      </Box>
    </>
  );
};
