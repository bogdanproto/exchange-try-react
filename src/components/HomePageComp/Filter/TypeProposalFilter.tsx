import { SelectChangeEvent } from '@mui/material/Select';
import { MenuItem, Select, FormControl } from '@mui/material';
import { useState } from 'react';
import { routes } from 'const';
import { Navigate, useNavigate } from 'react-router-dom';

enum ProposalType {
  Upcoming = 'UPCOMING',
  Cancelled = 'CANCELLED',
  Past = 'HISTORY',
}

export const TypeProposalFilter = () => {
  const [type, setType] = useState(ProposalType.Upcoming);
  const navigate = useNavigate();

  const handleChange = (evt: SelectChangeEvent<typeof type>) => {
    setType(evt.target.value as ProposalType);

    switch (evt.target.value) {
      case ProposalType.Upcoming:
        navigate(routes.GORIDE);
        break;
      case ProposalType.Past:
        navigate(routes.PAST);
        break;
      case ProposalType.Cancelled:
        navigate(routes.CANCELLED);
        break;

      default:
        navigate(routes.GORIDE);
    }
  };

  return (
    <>
      {type === ProposalType.Upcoming && <Navigate to={routes.GORIDE} />}

      <FormControl
        sx={{ m: 1, minWidth: 'calc(100% / 3)', margin: '0' }}
        size="small"
      >
        <Select
          inputProps={{ 'aria-label': 'Without label' }}
          id="type_proposal"
          value={type}
          onChange={handleChange}
          style={{ padding: '0', height: '24px', fontSize: '12px' }}
        >
          <MenuItem value={ProposalType.Upcoming}>
            {ProposalType.Upcoming}
          </MenuItem>
          <MenuItem value={ProposalType.Cancelled}>
            {ProposalType.Cancelled}
          </MenuItem>
          <MenuItem value={ProposalType.Past}>{ProposalType.Past}</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
