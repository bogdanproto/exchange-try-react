import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useTypeDispatch } from 'services/redux/customHook/typeHooks';
import { getAllProposalPending } from 'services/redux/data/operations';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';

export const Home = () => {
  const dispatch = useTypeDispatch();
  const [alignment, setAlignment] = useState('web');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  useEffect(() => {
    dispatch(getAllProposalPending());
  }, [dispatch]);

  return (
    <>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        fullWidth
        size="small"
      >
        <ToggleButton value="web" color="info" sx={{ fontWeight: 'bold' }}>
          GO RIDE
        </ToggleButton>
        <ToggleButton
          value="android"
          color="success"
          sx={{ fontWeight: 'bold' }}
        >
          PROPOSALS
        </ToggleButton>
        <ToggleButton value="ios" color="success" sx={{ fontWeight: 'bold' }}>
          PENDING
        </ToggleButton>
      </ToggleButtonGroup>

      <Outlet />
    </>
  );
};
