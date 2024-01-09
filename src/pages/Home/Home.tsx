import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { ToggleButtonGroup, ToggleButton, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { routes } from 'const';
import { TypeProposalFilter } from 'components/HomePageComp';

export const Home = () => {
  const theme = useTheme();
  const [alignment, setAlignment] = useState(routes.GORIDE);
  const navigate = useNavigate();

  useEffect(() => {
    switch (alignment) {
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
  }, [navigate, alignment]);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <>
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
          style={{ height: '28px' }}
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
        <TypeProposalFilter />
      </Box>
      <Box
        style={{
          paddingTop: '28px',
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};
