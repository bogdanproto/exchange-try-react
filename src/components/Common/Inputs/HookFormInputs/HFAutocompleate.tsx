import { Controller } from 'react-hook-form';
import { Autocomplete, TextField, Checkbox } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { ErrorInputForm } from '../../Error/ErrorInputForm.styled';
import { HFAutocompleateProps } from 'interfaces/component';

export const HFAutocompleate = ({
  control,
  multiple,
  name,
  label,
  options,
}: HFAutocompleateProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <>
            <Autocomplete
              multiple={multiple}
              freeSolo
              disableCloseOnSelect
              onChange={(_, newValue) => {
                field.onChange(newValue);
              }}
              id={name}
              options={options}
              sx={{ width: '100%' }}
              limitTags={1}
              size="medium"
              renderInput={params => {
                console.log(params);

                return (
                  <TextField {...params} label={label} inputRef={field.ref} />
                );
              }}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.label}
                </li>
              )}
            />
            {error && <ErrorInputForm>{error.message}</ErrorInputForm>}
          </>
        );
      }}
    />
  );
};
