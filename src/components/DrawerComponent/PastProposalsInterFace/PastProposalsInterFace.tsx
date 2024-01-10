import { ProposalStatusBack } from 'interfaces/data/proposal/IProposal';
import { useState } from 'react';
import { ToggleButtonGroup, ToggleButton, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Goride } from 'pages/Goride/Goride';

export const PastProposalsInterFace = () => {
  const theme = useTheme();
  const [filter, setFilter] = useState<ProposalStatusBack>(
    ProposalStatusBack.past
  );

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
        <Goride />
      </Box>
    </>
  );
};
