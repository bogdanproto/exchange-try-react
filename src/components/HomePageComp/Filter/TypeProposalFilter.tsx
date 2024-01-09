import { SelectChangeEvent } from '@mui/material/Select';
import { MenuItem, Select } from '@mui/material';
import { useState } from 'react';

enum ProposalType {
  Upcoming = 'upcoming',
  Cancelled = 'cancelled',
  Past = 'past',
}

export const TypeProposalFilter = () => {
  const [type, setType] = useState(ProposalType.Upcoming);

  const handleChange = (evt: SelectChangeEvent<typeof type>) => {
    setType(evt.target.value as ProposalType);
  };

  return (
    <Select
      inputProps={{ 'aria-label': 'Without label' }}
      id="type_proposal"
      value={type}
      onChange={handleChange}
    >
      <MenuItem value={ProposalType.Upcoming}>{ProposalType.Upcoming}</MenuItem>
      <MenuItem value={ProposalType.Cancelled}>
        {ProposalType.Cancelled}
      </MenuItem>
      <MenuItem value={ProposalType.Past}>{ProposalType.Past}</MenuItem>
    </Select>
  );
};
