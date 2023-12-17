import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import { useTypeSelector } from 'services/redux/customHook/typeHooks';
import { selectUser } from 'services/redux/auth/selectors';
import { ISportItem } from 'interfaces/userInterface';

export const SelectHeader = () => {
  const { sports, mainsport } = useTypeSelector(selectUser);
  const [value, setValue] = useState(mainsport);

  const handleChange = (evt: SelectChangeEvent) => {
    const selectedValue = sports.find(
      ({ _id }: ISportItem) => _id === evt.target.value
    );
    setValue(selectedValue ?? mainsport);
  };

  return (
    <FormControl variant="standard" sx={{ m: 1 }} size="small">
      <Select
        disableUnderline
        labelId="select-label"
        id="select_sport"
        displayEmpty
        renderValue={value => value ?? <p>CHOOSE SPORT</p>}
        value={value?.sport.toUpperCase()}
        onChange={handleChange}
      >
        {sports.map(({ _id, sport }: ISportItem) => (
          <MenuItem key={_id} value={_id}>
            {sport.toUpperCase()}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
