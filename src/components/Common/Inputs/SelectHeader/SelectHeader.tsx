import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const SelectHeader = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} size="small">
      <Select
        disableUnderline
        labelId="select-label"
        id="select_sport"
        displayEmpty
        renderValue={value =>
          value.length === 0 ? <p>Choose sport</p> : value
        }
        value={value}
        onChange={handleChange}
      >
        <MenuItem value={'KITESURF'}>KITESURF</MenuItem>
        <MenuItem value={'SNOWBOARD'}>SNOWBOARD</MenuItem>
      </Select>
    </FormControl>
  );
};
