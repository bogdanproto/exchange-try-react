import { Controller } from 'react-hook-form';
import {
  MenuItem,
  OutlinedInput,
  Checkbox,
  ListItemText,
  InputLabel,
  FormControl,
  Select,
} from '@mui/material';
import { HFSelectProps } from 'interfaces/component/inputs/selectInterface';

export const HFSelect = ({
  control,
  multiple,
  name,
  label,
  placeholder,
  options,
}: HFSelectProps) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <FormControl sx={{ width: '100%' }}>
        <InputLabel id="labelId">{label}</InputLabel>
        <Select
          labelId="labelId"
          id={name}
          multiple={multiple}
          value={field.value || []}
          onChange={e => field.onChange(e.target.value)}
          input={<OutlinedInput label={label} />}
          renderValue={selected =>
            [selected]
              .flat()
              .map((item: string) => options.get(item))
              .join(', ')
          }
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 180,
                width: 'calc(100%-36px)',
              },
            },
          }}
        >
          {[...options].length ? (
            [...options].map(([id, label]) => (
              <MenuItem key={id} value={id}>
                <Checkbox checked={field.value?.indexOf(id) > -1} />
                <ListItemText primary={label} />
              </MenuItem>
            ))
          ) : (
            <MenuItem disabled value="">
              <em>{placeholder}</em>
            </MenuItem>
          )}
        </Select>
      </FormControl>
    )}
  />
);
