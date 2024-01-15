import { useState } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { ToggleButtonGroup, ToggleButton, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { routes } from 'const';
import { FilterProposals } from 'components/Common/Filter';

export const Home = () => {
  const theme = useTheme();
  const [alignment, setAlignment] = useState(routes.GORIDE);
  const navigate = useNavigate();

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);

      switch (newAlignment) {
        case 'goride':
          navigate(routes.GORIDE);
          break;
        case 'proposals':
          navigate(routes.PROPOSALS);
          break;
        case 'pending':
          navigate(routes.PENDING);
          break;
        default:
          navigate(routes.PROPOSALS);
      }
    }
  };

  return (
    <>
      {alignment === 'goride' && <Navigate to={routes.GORIDE} />}
      <Box
        style={{
          position: 'fixed',
          top: '55px',
          left: '0',
          width: '100%',
          paddingLeft: '16px',
          paddingRight: '16px',
          paddingBottom: '4px',
          zIndex: '1110',
          backgroundColor: theme.palette.background.default,
        }}
      >
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform proposals"
          fullWidth
          size="small"
          style={{ height: '36px' }}
        >
          <ToggleButton value="goride" sx={{ fontWeight: 'bold' }}>
            GO RIDE
          </ToggleButton>
          <ToggleButton value="proposals" sx={{ fontWeight: 'bold' }}>
            PROPOSALS
          </ToggleButton>
          <ToggleButton value="pending" sx={{ fontWeight: 'bold' }}>
            PENDING
          </ToggleButton>
        </ToggleButtonGroup>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'right',
            marginTop: '4px',
          }}
        ></Box>
        {alignment === 'proposals' && <FilterProposals />}
      </Box>

      <Box
        style={{
          paddingTop: `${alignment === 'proposals' ? '88px' : '36px'}`,
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};
