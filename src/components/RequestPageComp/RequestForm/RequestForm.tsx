import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Switch } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaRequestForm } from '../../../const/shema';
import { HFAutocompleate } from '../../Common/Inputs/HookFormInputs/HFAutocompleate';
import { MobileDatePicker, MobileTimePicker } from '@mui/x-date-pickers';
import { Stack, FormControlLabel, Button } from '@mui/material';
import dayjs from 'dayjs';

interface IRequestForm {
  allday: boolean;
  time: any;
  date: any;
  spot: string;
  is_phone: boolean;
  auto_accept: boolean;
}

const optionsSpot = [
  { id: '1', label: 'tarifa' },
  { id: '2', label: 'wissant' },
];
const optionsEqpt = [
  { id: '1', label: 'Naish Pivot 8' },
  { id: '2', label: 'Core XR 10' },
];

export const RequestForm = () => {
  const { handleSubmit, control } = useForm<IRequestForm>({
    defaultValues: {
      allday: false,
      time: dayjs(),
      date: dayjs(),
    },
    resolver: yupResolver(schemaRequestForm) as any,
  });

  const onSubmit: SubmitHandler<IRequestForm> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="allday"
        control={control}
        render={({ field }) => (
          <FormControlLabel control={<Switch {...field} />} label="allday" />
        )}
      />

      <Controller
        name="time"
        control={control}
        render={({ field }) => <MobileTimePicker {...field} label="Time" />}
      />

      <Controller
        name="date"
        control={control}
        render={({ field }) => <MobileDatePicker {...field} label="Date" />}
      />

      <HFAutocompleate
        multiple={false}
        control={control}
        name="spot"
        label="Spot"
        options={optionsSpot}
      />

      <HFAutocompleate
        multiple={true}
        control={control}
        name="eqpt"
        label="Equipment"
        options={optionsEqpt}
      />

      <Controller
        name="is_phone"
        control={control}
        render={({ field }) => (
          <FormControlLabel
            control={<Switch {...field} />}
            label="Show my phone number"
          />
        )}
      />

      <Controller
        name="auto_accept"
        control={control}
        render={({ field }) => (
          <FormControlLabel
            control={<Switch {...field} />}
            label="Start"
            labelPlacement="top"
            color="primary"
          />
        )}
      />
      <Stack spacing={2} direction="row">
        <Button type="submit" variant="contained">
          SUBMIT
        </Button>
        <Button variant="contained">CANCEL</Button>
      </Stack>
    </form>
  );
};
