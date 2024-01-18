import { Controller } from 'react-hook-form';
import { Autocomplete, TextField } from '@mui/material';
import { HFAutocompleateProps, ISpot } from 'interfaces';
import { ErrorInputForm } from 'components/Common/Error/ErrorInputForm.styled';

export const HFAutocompleateSearch = ({
  control,
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
              value={field.value || null}
              onChange={(event: any, newValue: ISpot | null) => {
                field.onChange(newValue ? newValue : null);
              }}
              id="spot"
              options={options}
              getOptionLabel={(option: ISpot) => option.spot.toUpperCase()}
              renderInput={params => <TextField {...params} label={label} />}
            />
            {error && <ErrorInputForm>{error.message}</ErrorInputForm>}
          </>
        );
      }}
    />
  );
};
