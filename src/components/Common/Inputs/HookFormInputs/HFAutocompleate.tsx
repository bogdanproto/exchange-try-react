import { Controller } from 'react-hook-form';
import { Autocomplete, TextField } from '@mui/material';
import { ErrorInputForm } from '../../Error/ErrorInputForm.styled';

interface HFAutocompleateProps {
  control: any;
  multiple: boolean;
  name: string;
  label: string;
  options: { id: string; label: string }[];
}

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
              onChange={(_, newValue) => {
                field.onChange(newValue);
              }}
              id={name}
              options={options}
              sx={{ width: 300 }}
              renderInput={params => (
                <TextField {...params} label={label} inputRef={field.ref} />
              )}
            />
            {error && <ErrorInputForm>{error.message}</ErrorInputForm>}
          </>
        );
      }}
    />
  );
};
